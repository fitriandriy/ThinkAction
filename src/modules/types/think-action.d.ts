export type ThinkActionUser = {
  id?: string
  full_name?: string
  name?: string
  username?: string
  bio?: string
  avatar?: string
  is_private?: boolean
  is_supporting?: boolean
  goals_performance?: number
  supporting_count?: number
  supporter_count?: number
}

export type ThinkActionCategory = {
  id: number | string
  category: string
}

export type ThinkActionComment = {
  id: string
  full_name: string
  avatar: string
  date_time: string
  comment: string
  comment_id: string
  parent_id?: string
  goal_id?: string
  replies: ThinkActionComment[]
}

export type ThinkActionGoal = {
  id: string
  user: ThinkActionUser
  user_id: string
  category: ThinkActionCategory | string
  caption: string
  photos?: string[]
  is_liked_by_user: boolean
  cheers_count: number
  comments_count: number
  meta?: any
  goal_type?: string
  date_time?: string
  created_at?: string
}
