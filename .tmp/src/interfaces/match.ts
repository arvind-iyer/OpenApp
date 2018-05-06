
export interface Match {
    host_id: string;
    location: string;
    max_capacity: number;
    start_time: number;
    end_time: number;
    participants: string[];
    skill_level: number;
    sport: string;
    state: string;
  }

export interface AboutSettings {
  name: string;
  age: number;
  gender: string;
  sport: string[];
  phone: number;
}