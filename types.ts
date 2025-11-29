import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface StoryItem {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}