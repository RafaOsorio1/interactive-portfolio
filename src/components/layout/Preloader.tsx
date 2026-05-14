import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // Force completion after the progress bar finishes + a small buffer
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-start gap-4 p-10 border border-hud-border max-w-md w-full relative">
        <div className="hud-corner-tl" />
        <div className="hud-corner-br" />

        <div className="flex justify-between w-full telemetry-text text-hud-accent">
           <span>BOOT_SEQUENCE</span>
           <span className="animate-pulse">RUNNING</span>
        </div>

        <div className="space-y-1 w-full">
           {[
             { l: 'CORE.KERNEL', v: 'LOADED' },
             { l: 'HUD.GRAPHICS', v: 'INIT' },
             { l: 'NET.UPLINK', v: 'SECURE' },
             { l: 'USER.AUTH', v: 'BYPASS' }
           ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.2 }}
               className="flex justify-between font-mono text-[10px]"
             >
                <span className="text-hud-muted">{item.l}</span>
                <span className="text-hud-accent">{item.v}</span>
             </motion.div>
           ))}
        </div>

        <div className="relative h-1 w-full bg-hud-border mt-4">
          <motion.div
            className="absolute inset-y-0 left-0 bg-hud-accent shadow-[0_0_10px_rgba(0,243,255,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};
