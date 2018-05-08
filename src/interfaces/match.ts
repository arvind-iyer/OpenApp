
export interface Match {
    id? : string;
    host_id: string;
    location: string;
    max_capacity: number;
    start_time: number;
    end_time: number;
    participants: Array<string>;
    skill_level: number;
    sport: string;
    state?: string;
  }

export interface AboutSettings {
  name?: string;
  age?: number;
  gender?: string;
  sport?: string[];
  phone?: number;
}