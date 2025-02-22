/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',  // Main primary color
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          500: '#ff6b6b',  // Bright red accent
          600: '#ff5252',
        },
        manga: {
          light: '#faf7ff',
          dark: '#2a1f3f',
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#FF6B6B",           // สีหลัก - สีแดงอมส้มสดใส
          "primary-focus": "#FF5252",     // สีหลักเมื่อ hover
          "primary-content": "#ffffff",   // สีข้อความบนพื้นสีหลัก
          
          "secondary": "#4ECDC4",         // สีรอง - สีเขียวมิ้นท์
          "secondary-focus": "#45B7AE",   // สีรองเมื่อ hover
          "secondary-content": "#ffffff", // สีข้อความบนพื้นสีรอง
          
          "accent": "#FFE66D",           // สีเน้น - สีเหลืองพาสเทล
          "accent-focus": "#FFD93D",     // สีเน้นเมื่อ hover
          "accent-content": "#2C3E50",   // สีข้อความบนพื้นสีเน้น
          
          "neutral": "#2C3E50",          // สีกลาง - สีน้ำเงินเข้ม
          "neutral-focus": "#34495E",    // สีกลางเมื่อ hover
          "neutral-content": "#ffffff",   // สีข้อความบนพื้นสีกลาง
          
          "base-100": "#ffffff",         // สีพื้นหลักระดับ 1
          "base-200": "#F7FAFC",         // สีพื้นหลักระดับ 2
          "base-300": "#E2E8F0",         // สีพื้นหลักระดับ 3
          "base-content": "#2C3E50",     // สีข้อความบนพื้นหลัก
          
          "info": "#3498DB",             // สีแจ้งข้อมูล
          "success": "#2ECC71",          // สีแจ้งสำเร็จ
          "warning": "#F1C40F",          // สีแจ้งเตือน
          "error": "#E74C3C",            // สีแจ้งข้อผิดพลาด
          
          "--rounded-box": "0.5rem",     // border-radius ของ box
          "--rounded-btn": "0.5rem",     // border-radius ของปุ่ม
          "--rounded-badge": "1.9rem",   // border-radius ของ badge
          "--animation-btn": "0.25s",    // ระยะเวลา animation ของปุ่ม
          "--animation-input": "0.2s",   // ระยะเวลา animation ของ input
          "--btn-focus-scale": "0.95",   // scale เมื่อกดปุ่ม
          "--border-btn": "1px",         // ความหนาขอบปุ่ม
          "--tab-border": "1px",         // ความหนาขอบแท็บ
          "--tab-radius": "0.5rem",      // border-radius ของแท็บ
        },
      },
    ],
  },
}