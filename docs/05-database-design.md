# Database Schema (Drizzle ORM - Video Platform MVP)

# 👤 users

- id: uuid (primary)
- username: unique string
- email: unique string
- passwordHash: string
- avatar: string (nullable)
- bio: text (nullable)
- createdAt: timestamp
- updatedAt: timestamp

---

# 🎬 videos

- id: uuid (primary)
- userId: relation → users.id

- title: string
- description: text (nullable)
- videoUrl: string
- thumbnailUrl: string

- duration: number (seconds)
- viewsCount: number (default: 0)

- createdAt: timestamp
- updatedAt: timestamp

---

# ❤️ likes

- id: uuid (primary)
- userId: relation → users.id
- videoId: relation → videos.id
- createdAt: timestamp

Constraints:

- unique(userId + videoId)

---

# 🔖 saved_videos

- id: uuid (primary)
- userId: relation → users.id
- videoId: relation → videos.id
- createdAt: timestamp

Constraints:

- unique(userId + videoId)

---

# 💬 comments

- id: uuid (primary)
- userId: relation → users.id
- videoId: relation → videos.id

- content: text
- parentId: relation → comments.id (nullable for replies)

- createdAt: timestamp
- updatedAt: timestamp

---

# 📊 video_views

- id: uuid (primary)
- userId: relation → users.id (nullable for guest)
- videoId: relation → videos.id

- ipHash: string
- createdAt: timestamp

---

# 🔔 subscriptions

- id: uuid (primary)
- subscriberId: relation → users.id
- channelId: relation → users.id

- createdAt: timestamp

Constraints:

- unique(subscriberId + channelId)

---

# 🕒 watch_history

- id: uuid (primary)
- userId: relation → users.id
- videoId: relation → videos.id

- progress: number (seconds watched)
- lastWatched: timestamp
- createdAt: timestamp

---

# 🧠 playlists (optional)

- id: uuid (primary)
- userId: relation → users.id

- title: string
- createdAt: timestamp

---

# 📦 playlist_items

- id: uuid (primary)
- playlistId: relation → playlists.id
- videoId: relation → videos.id

- position: number
- createdAt: timestamp

---

# 🚀 Drizzle Design Notes (important)

## 1. userId everywhere = FK to users.id

No separate channel entity needed

## 2. use relations() in Drizzle

You will define:

- users relations → videos, likes, comments
- videos relations → user, comments, likes

## 3. always add indexes on:

- userId
- videoId
- createdAt (for feeds)

## 4. composite uniqueness is critical:

- likes (userId + videoId)
- saved (userId + videoId)
- subscriptions (subscriberId + channelId)

---

# 🧠 architecture mindset

This schema is optimized for:

- feed generation (latest videos)
- social graph (subscriptions)
- engagement tracking (likes/saves/comments)
- watch analytics (history + views)
- future recommendation system
