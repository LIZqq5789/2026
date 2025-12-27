
export interface ScheduleItem {
  time: string;
  activity: string;
  description?: string;
  locationLink?: string;
}

export interface DayItinerary {
  id: number;
  date: string;
  title: string;
  schedules: ScheduleItem[];
  accommodation?: string;
}

export interface QuickLink {
  name: string;
  url: string;
  icon: string;
  category: 'official' | 'transport' | 'service' | 'booking';
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}
