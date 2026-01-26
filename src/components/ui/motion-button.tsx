'use client';

import { motion } from 'framer-motion';
import { Button, ButtonProps } from './button';
import React from 'react';

// Create a motion component from the Button
const MotionBtn = motion(Button);

// Export a wrapped component that passes props
export const MotionButton = React.forwardRef<HTMLButtonElement, any>((props, ref) => (
    <MotionBtn {...props} ref={ref} />
));
MotionButton.displayName = "MotionButton";
