'use client';

import { motion } from 'framer-motion';
import { Button, ButtonProps } from './button';
import React from 'react';

// Create a motion component from the Button
const MotionBtn = motion(Button);

type MotionButtonProps = ButtonProps & React.ComponentProps<typeof motion.button>;

// Export a wrapped component that passes props
export const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>((props, ref) => (
    <MotionBtn {...props} ref={ref} />
));
MotionButton.displayName = "MotionButton";
