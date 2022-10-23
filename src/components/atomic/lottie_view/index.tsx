import { useEffect, useRef, useState } from 'react';
import type { AnimationConfigWithPath, LottiePlayer } from 'lottie-web';
import { CSSProperties } from 'styled-components';

interface LottieViewProps {
  style?: CSSProperties
  animationConfig: Partial<AnimationConfigWithPath<'svg'>>
}

export function LottieView ({ style={}, animationConfig }: LottieViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        ...animationConfig,
        container: ref.current,
        renderer: 'svg',
      });

      return () => animation.destroy();
    }
  }, [lottie, animationConfig]);

  return (
    <div ref={ref} style={style} />
  );
};
