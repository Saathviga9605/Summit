# AIAH 2026 Website - Recent Changes

## Summary of Updates

All requested modifications have been successfully implemented. Below is a detailed breakdown of the changes:

---

## 1. Flash News Scroller
**Location:** Below Navbar  
**Component:** `components/FlashNews.tsx`

- Added an animated news scroller with continuous marquee effect
- Displays announcements like "Early bird registrations open!"
- Styled with gradient background (sky-600 to cyan-600)
- Animation added to `app/globals.css`

---

## 2. Workshops Content Updated
**Component:** `components/EventHighlights.tsx`

### College Students Workshop:
- Updated to: **Quantum AI Walkthrough**
- Includes: Quantum computing and AI integration topics

### School Students Workshop:
- Updated to: **Introduction to AR/VR**
- Includes: Augmented and Virtual Reality basics

### Schedule Information:
- **Day 1:** One workshop session
- **Day 2:** Two workshop sessions

---

## 3. Eminent Speakers
**Updated in:** `components/EventHighlights.tsx` and `components/Navbar.tsx`

- Changed "Keynote Talks" to "Eminent Speakers" throughout the website
- Updated navigation menu and event highlights section

---

## 4. About Sections
**Component:** `components/AboutSection.tsx`

### Three sections created:
1. **About SSN College of Engineering**
   - Overview of the institution
   - Stats: 25+ Years of Excellence, Top 100 NIRF Ranking
   - Image placeholder included

2. **About Department of Information Technology**
   - Department overview and focus areas
   - Stats: 500+ Students, 95%+ Placement Record
   - Image placeholder included

3. **Department Activities**
   - Interactive image carousel with 5 slides
   - Navigation buttons (Previous/Next)
   - Dot indicators for slide position
   - Image placeholders for activity photos

---

## 5. Student Coordinators Section
**Component:** `components/StudentCoordinators.tsx`

- Added below Organisers section
- Card-based layout similar to Organisers
- 4 placeholder coordinator cards
- Each card includes:
  - Photo placeholder
  - Name
  - Role (Lead, Technical, Events, Logistics Coordinator)
  - Department and Year information

---

## 6. Web Designers Section
**Component:** `components/WebDesigners.tsx`

- Added below Student Coordinators
- Two prominent cards for:
  1. **Saathviga B** - Third Year, Dept of Info Tech
  2. **Bagavati N** - Third Year, Dept of Info Tech
- Enhanced card design with skill badges
- Photo placeholders included

---

## 7. Contact Section & Location Map
**Component:** `components/Footer.tsx`

### Enhanced Contact Information:
- **Address:** Full postal address of SSN College
- **Email:** info@aissn.in
- **Phone:** +91 44 2745 2812, +91 44 2745 2813
- **Event Dates:** March 25 - 28, 2026

### Google Maps Integration:
- Embedded interactive Google Map
- Shows exact location of SSN College of Engineering
- Full-screen map in footer contact section

---

## 8. Page Structure Update
**File:** `app/page.tsx`

### New section order:
1. Hero
2. Event Highlights
3. About Section (SSN + Dept + Activities)
4. Organisers
5. Student Coordinators
6. Web Designers
7. Contact/Footer (with map)

---

## Image Placeholder Directories Created

The following directories have been created for future image additions:

```
public/images/
├── activities/     (For department activity carousel images)
├── coordinators/   (For student coordinator photos)
└── designers/      (For web designer photos)
```

### To-Do: Add Images
- Add 5 images to `public/images/activities/` named activity1.jpg through activity5.jpg
- Add coordinator photos to `public/images/coordinators/`
- Add designer photos to `public/images/designers/`
- Add SSN College photo for About section
- Add Department photo for About section

---

## Technical Details

### New Components Created:
1. `FlashNews.tsx` - Animated news scroller
2. `AboutSection.tsx` - Combined about sections with carousel
3. `StudentCoordinators.tsx` - Student coordinators display
4. `WebDesigners.tsx` - Web design team display

### Modified Components:
1. `EventHighlights.tsx` - Updated workshop content
2. `Navbar.tsx` - Changed navigation labels
3. `Footer.tsx` - Enhanced contact section with map
4. `layout.tsx` - Added FlashNews component
5. `page.tsx` - Added new sections

### Style Updates:
- Added `animate-scroll` keyframe animation to `globals.css`
- All styling uses Tailwind CSS
- Responsive design maintained across all new components

---

## Live Features

✅ Flash news auto-scrolling animation  
✅ Interactive department activities carousel  
✅ Hover effects on all cards  
✅ Embedded Google Maps  
✅ Mobile-responsive design  
✅ Smooth scroll navigation  
✅ Gradient backgrounds and modern UI  

---

## Next Steps

1. Replace placeholder images with actual photos
2. Update coordinator names and roles with actual students
3. Add social media links for team members (optional)
4. Test all links and navigation
5. Verify Google Maps location accuracy

---

**All changes completed successfully! ✨**
