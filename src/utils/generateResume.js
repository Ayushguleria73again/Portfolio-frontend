import { jsPDF } from 'jspdf';
import { resumeData } from './resumeData';

export const generateResume = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = 20;

  // Color scheme
  const primaryColor = [10, 10, 10]; // Dark black
  const accentColor = [100, 100, 100]; // Gray
  const textColor = [40, 40, 40]; // Dark gray for text

  // Helper function to add text with wrapping
  const addText = (text, x, y, maxWidth, fontSize = 10, isBold = false, color = textColor) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * (fontSize * 0.5); // Return height used
  };

  // Helper to add section header with underline
  const addSectionHeader = (title, y) => {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(title.toUpperCase(), margin, y);
    
    // Add decorative line under header
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, y + 2, pageWidth - margin, y + 2);
    
    return y + 10;
  };

  // ===== HEADER SECTION =====
  // Professional header with name and title
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, pageWidth, 45, 'F');
  
  // Name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text(resumeData.personal.name.toUpperCase(), pageWidth / 2, 20, { align: 'center' });
  
  // Title
  doc.setFontSize(13);
  doc.setFont('helvetica', 'normal');
  doc.text(resumeData.personal.title, pageWidth / 2, 30, { align: 'center' });
  
  // Contact bar
  doc.setFontSize(9);
  const contactLine = `${resumeData.personal.email} | ${resumeData.personal.location} | ${resumeData.personal.website}`;
  doc.text(contactLine, pageWidth / 2, 38, { align: 'center' });

  yPosition = 55;

  // ===== PROFESSIONAL SUMMARY =====
  yPosition = addSectionHeader('Professional Summary', yPosition);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const summaryHeight = addText(resumeData.summary, margin, yPosition, pageWidth - 2 * margin, 10, false);
  yPosition += summaryHeight + 12;

  // ===== EXPERIENCE SECTION =====
  yPosition = addSectionHeader('Professional Experience', yPosition);
  
  resumeData.experience.forEach((exp, index) => {
    // Company and role
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(exp.role, margin, yPosition);
    yPosition += 6;
    
    // Company details
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(`${exp.company} | ${exp.period} | ${exp.location}`, margin, yPosition);
    yPosition += 7;
    
    // Description bullets
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    exp.description.forEach((item) => {
      doc.setFontSize(9);
      doc.text('•', margin + 2, yPosition);
      const itemHeight = addText(item, margin + 8, yPosition, pageWidth - 2 * margin - 8, 9);
      yPosition += itemHeight + 3;
    });
    yPosition += 5;
  });

  // ===== EDUCATION SECTION =====
  if (yPosition > 230) {
    doc.addPage();
    yPosition = 20;
  }

  yPosition = addSectionHeader('Education', yPosition);

  resumeData.education.forEach((edu) => {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(edu.degree, margin, yPosition);
    yPosition += 5;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(`${edu.institution} | ${edu.period}`, margin, yPosition);
    yPosition += 6;
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    const descHeight = addText(edu.description, margin, yPosition, pageWidth - 2 * margin, 9);
    yPosition += descHeight + 8;
  });

  // ===== TECHNICAL SKILLS =====
  if (yPosition > 210) {
    doc.addPage();
    yPosition = 20;
  }

  yPosition = addSectionHeader('Technical Skills', yPosition);

  // Create a two-column layout for skills
  const skillCategories = Object.entries(resumeData.skills);
  const columnWidth = (pageWidth - 3 * margin) / 2;
  let currentColumn = 0;
  let columnY = yPosition;

  skillCategories.forEach(([category, skills], index) => {
    const xPos = margin + (currentColumn * (columnWidth + margin));
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    doc.text(categoryName, xPos, columnY);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    const skillsText = skills.join(', ');
    const skillsHeight = addText(skillsText, xPos, columnY + 5, columnWidth, 9);
    
    currentColumn++;
    if (currentColumn >= 2) {
      currentColumn = 0;
      columnY += skillsHeight + 12;
    }
  });

  yPosition = columnY + (currentColumn > 0 ? 15 : 5);

  // ===== KEY PROJECTS =====
  if (yPosition > 190) {
    doc.addPage();
    yPosition = 20;
  }

  yPosition = addSectionHeader('Key Projects', yPosition);

  resumeData.projects.slice(0, 5).forEach((project) => {
    if (yPosition > 260) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(project.name, margin, yPosition);
    yPosition += 5;
    
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text(`Technologies: ${project.tech.join(', ')}`, margin, yPosition);
    yPosition += 5;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    const projHeight = addText(project.description, margin, yPosition, pageWidth - 2 * margin, 9);
    yPosition += projHeight + 8;
  });

  // ===== FOOTER =====
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `${resumeData.personal.name} - Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  // Save the PDF
  doc.save('Ayush_Guleria_Resume.pdf');
};
