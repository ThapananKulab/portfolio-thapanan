# ขั้นตอนที่ 1: สร้างขั้นตอนการสร้างภาพจาก node.js
FROM node:18 AS build

# ตั้งค่าพื้นที่ทำงานในคอนเทนเนอร์
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json ไปยังพื้นที่ทำงาน
COPY package*.json ./

# ติดตั้ง dependencies ที่จำเป็น
RUN npm install

# คัดลอกไฟล์โค้ดทั้งหมดไปยังพื้นที่ทำงาน
COPY . .

# สร้างแอปพลิเคชันสำหรับ production
RUN gatsby build

# ขั้นตอนที่ 2: ใช้ภาพ nginx เพื่อนำแอปพลิเคชันไปใช้งาน
FROM nginx:1.23-alpine

# คัดลอก build ที่สร้างจากขั้นตอนก่อนหน้านี้ไปยังโฟลเดอร์ html ของ nginx
COPY --from=build /app/build /usr/share/nginx/html


EXPOSE 3030

CMD ["gatsby", "develop"]
