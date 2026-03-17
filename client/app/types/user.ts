export interface UserProfile {
  id: string
  name: string
  email: string
  picture: string | null  // null or '' = no picture; both handled by avatar binding
  role: 'USER' | 'ADMIN'
  verified: boolean
  twoFactorEnabled: boolean
  authMethod: 'EMAIL' | 'GOOGLE'
}
