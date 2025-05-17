# Twitter Clone - Database Schema

## 1. Users

| Column Name     | Data Type     | Description                 |
|-----------------|---------------|-----------------------------|
| id              | BIGINT (PK)   | Unique user ID              |
| username        | VARCHAR       | Unique username             |
| email           | VARCHAR       | Unique user email           |
| password_hash   | VARCHAR       | Hashed password             |
| bio             | TEXT          | User bio                    |
| profile_image   | VARCHAR       | URL to profile image        |

---

## 2. Tweets

| Column Name     | Data Type     | Description                         |
|-----------------|---------------|-------------------------------------|
| id              | BIGINT (PK)   | Unique tweet ID                     |
| user_id         | BIGINT (FK)   | ID of the user who posted the tweet |
| content         | TEXT          | Tweet content                       |
| created_at      | TIMESTAMP     | When the tweet was created          |
| parent_tweet_id | BIGINT (FK)   | For replies (nullable)              |

---

## 3. Followers

| Column Name     | Data Type     | Description                         |
|-----------------|---------------|-------------------------------------|
| follower_id     | BIGINT (FK)   | ID of the follower user             |
| following_id    | BIGINT (FK)   | ID of the followed user             |
| followed_at     | TIMESTAMP     | When the follow action occurred     |
**PK:** (`follower_id`, `following_id`)

---

## 4. Likes

| Column Name     | Data Type     | Description                         |
|-----------------|---------------|-------------------------------------|
| user_id         | BIGINT (FK)   | User who liked the tweet            |
| tweet_id        | BIGINT (FK)   | Tweet that was liked                |
| liked_at        | TIMESTAMP     | When the like occurred              |
**PK:** (`user_id`, `tweet_id`)

---

## 5. Retweets

| Column Name     | Data Type     | Description                         |
|-----------------|---------------|-------------------------------------|
| id              | BIGINT (PK)   | Unique retweet ID                   |
| user_id         | BIGINT (FK)   | User who retweeted                  |
| tweet_id        | BIGINT (FK)   | Original tweet                      |
| retweeted_at    | TIMESTAMP     | When the retweet occurred           |

---

## 6. Media

Stores media (images/videos) associated with tweets.

| Column Name     | Data Type     | Description                         |
|-----------------|---------------|-------------------------------------|
| id              | BIGINT (PK)   | Unique media ID                     |
| tweet_id        | BIGINT (FK)   | Associated tweet                    |
| media_url       | VARCHAR       | URL to the media file               |
| media_type      | VARCHAR       | Type of media (image, video, etc.) |
