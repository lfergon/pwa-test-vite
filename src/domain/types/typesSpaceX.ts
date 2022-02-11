export type SpaceXMission = {
  id: string;
  name: string;
  description: string;
  twitter?: string;
  website: string;
  wikipedia: string;
};

export type MissionsSpaceX = {
  data: SpaceXMission[];
};
