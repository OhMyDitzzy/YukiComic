export function deprecated(message?: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
      console.warn(`Method ${propertyKey} is deprecated. ${message || ''}`);
      return originalMethod.apply(this, args);
    };
    
    return descriptor;
  };
}
