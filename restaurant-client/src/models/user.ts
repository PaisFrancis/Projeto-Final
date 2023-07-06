type Profile = {
  firstName: string;
  lastName?: string;
};

export type User = {
  id: string;
  email: string;
  profile: Profile;
  userRole: string;
  createdAt: string;
  updatedAt: string;
};
