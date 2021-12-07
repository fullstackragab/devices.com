export interface Device {
  id: string;
  name: string;
  type: 'mobile' | 'laptop' | 'desktop' | 'tv' | 'tablet';
  temperature: number;
  status: 'available' | 'offline'
}
