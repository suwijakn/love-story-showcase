/// <reference types="vite/client" />

interface Window {
  sa_event: (eventName: string, metadata?: Record<string, any>) => void;
}
