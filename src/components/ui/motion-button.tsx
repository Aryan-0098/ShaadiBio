'use client';

import { motion } from 'framer-motion';
import { Button, ButtonProps } from './button';
import React from 'react';

// Wrapper to add motion to Shadcn Button
export const MotionButton = motion(React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <Button {...props} ref={ref} />
)));
MotionButton.displayName = "MotionButton";
