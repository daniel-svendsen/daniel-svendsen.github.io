// src/components/Layout/WorkFooter.tsx
import React from 'react'
import { CvData } from '@/types/CvTypes'
import PdfDownloadButton from '@/work/pdf/PdfDownloadButton'

interface WorkFooterProps {
  cvData: CvData | null
}

const WorkFooter: React.FC<WorkFooterProps> = ({ cvData }) => {
  return (
    <footer className="bg-custom-beige shadow p-4 text-center">
      <PdfDownloadButton cvData={cvData} />
    </footer>
  )
}

export default WorkFooter
