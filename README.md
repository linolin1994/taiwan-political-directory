# 台灣政要通 (Taiwan Political Directory)

A modern, real-time directory of Taiwan's public officials (Legislators, Mayors, Councilors, and Bureau Heads). Built with **Next.js 14**, **Tailwind CSS**, and **Fuse.js**.

![Project Screenshot](./public/screenshot.png)

## ✨ Features

- **🔍 Tri-Core Search Engine**:
  - **Pinyin/Zhuyin Match**: Search "lxy" to find "盧秀燕", "tpe" to find "台北市".
  - **Compact Search**: Support natural typing without spaces (e.g., "台北市市長").
  - **Fuzzy Search**: Tolerates typos (e.g., "台背市" -> "臺北市").
- **📱 Mobile-First Design**:
  - **Vertical Profile Cards**: optimized for small screens, ensuring no text truncation.
  - **Responsive Grid**: Adaptive layout from 2 columns (mobile) to 5 columns (desktop).
- **🏛️ Comprehensive Data**:
  - **Legislators**: Real-time scraping from the Legislative Yuan, with detailed district mapping.
  - **Six Capitals**: Complete coverage of Mayors and Bureau Heads for Taipei, New Taipei, Taoyuan, Taichung, Tainan, and Kaohsiung.
  - **Councilors**: Detailed list of Taipei City Councilors grouped by district.
- **⚡ High Performance**:
  - Uses **Next.js ISR (Incremental Static Regeneration)** for instant page loads while keeping data fresh (revalidates every 24h).
  - Client-side filtering for zero-latency interactions.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/linolin1994/taiwan-political-directory.git
   cd taiwan-political-directory
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Data Sources

Data is scraped/aggregated from official government websites to ensure accuracy.

### 📜 Legislative Yuan (立法院)
- **Source**: [Legislative Yuan Website](https://www.ly.gov.tw/Pages/List.aspx?nodeid=109)
- **Coverage**: All 113 Legislators (Regional, Indigenous, Party-List).

### 🏛️ City Governments (六都與基隆)
| City | Type | Source URL |
|------|------|------------|
| **Taipei** | Bureau Heads | [Department of Personnel](https://dop.gov.taipei) |
| **Taipei** | Councilors | [Taipei City Council](https://www.tcc.gov.tw/) (Static Verified List) |
| **New Taipei**| Bureau Heads | [Wiki / Official Site](https://www.ntpc.gov.tw/) |
| **Taoyuan** | Bureau Heads | [Personnel Department](https://personnel.tycg.gov.tw/News_Content.aspx?n=11979&s=1033873) |
| **Taichung** | Bureau Heads | [Personnel Department](https://www.personnel.taichung.gov.tw/27164/27167/27173/334697) |
| **Tainan** | Bureau Heads | [City Government](https://www.tainan.gov.tw/News_Leader.aspx?n=14212&sms=16577) |
| **Kaohsiung**| Bureau Heads | [Personnel Department](https://kpdforum.kcg.gov.tw/Manager2/Gov_Manager_Info.aspx) |
| **Keelung** | Bureau Heads | [City Government](https://www.klcg.gov.tw/tw/personnel/3802.html) |

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Scraping**: [Cheerio](https://cheerio.js.org/) + [Axios](https://axios-http.com/)
- **Search**: [Fuse.js](https://fusejs.io/) + [pinyin-match](https://github.com/creeperyang/pinyin-match)
- **Icons**: Simple Unicode & SVG fallback strategies

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

