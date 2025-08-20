
"use client";
import { useEffect, useState } from "react";

interface ABTestProps {
  testName: string;
  variantA: React.ReactNode;
  variantB: React.ReactNode;
  splitRatio?: number; // 0.5 = 50/50 split
  onVariantShown?: (variant: 'A' | 'B') => void;
}

export function ABTestComponent({
  testName,
  variantA,
  variantB,
  splitRatio = 0.5,
  onVariantShown,
}: ABTestProps) {
  const [variant, setVariant] = useState<'A' | 'B' | null>(null);

  useEffect(() => {
    // Check if user has been assigned a variant before
    const storageKey = `ab-test-${testName}`;
    const storedVariant = localStorage.getItem(storageKey);

    if (storedVariant && (storedVariant === 'A' || storedVariant === 'B')) {
      setVariant(storedVariant);
      onVariantShown?.(storedVariant);
    } else {
      // Assign new variant
      const randomVariant = Math.random() < splitRatio ? 'A' : 'B';
      setVariant(randomVariant);
      localStorage.setItem(storageKey, randomVariant);
      onVariantShown?.(randomVariant);

      // Track the variant assignment
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'ab_test_assignment', {
          event_category: 'ab_testing',
          event_label: `${testName}_variant_${randomVariant}`,
          custom_parameter_1: testName,
          custom_parameter_2: randomVariant,
        });
      }
    }
  }, [testName, splitRatio, onVariantShown]);

  // Don't render until variant is determined
  if (!variant) {
    return null;
  }

  return (
    <div data-ab-test={testName} data-variant={variant}>
      {variant === 'A' ? variantA : variantB}
    </div>
  );
}

// Hook para rastrear conversões de teste A/B
export function useABTestConversion(testName: string) {
  const trackConversion = (conversionType: string = 'click') => {
    const storageKey = `ab-test-${testName}`;
    const variant = localStorage.getItem(storageKey);

    if (variant && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_conversion', {
        event_category: 'ab_testing',
        event_label: `${testName}_variant_${variant}_${conversionType}`,
        value: 1,
        custom_parameter_1: testName,
        custom_parameter_2: variant,
      });
    }
  };

  return { trackConversion };
}
