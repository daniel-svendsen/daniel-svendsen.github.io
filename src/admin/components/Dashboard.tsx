import React from 'react'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { Button } from '@/components/Button'
import { LogOut } from 'lucide-react'
import { GalleryList } from './GalleryList'
import { CreateGalleryForm } from '@/admin/components/GalleryForm'
import { useGalleries } from '@/admin/hooks/useGalleries'

type DashboardProps = {
  onLogout: () => void
}

export function Dashboard({ onLogout }: DashboardProps) {
  const { galleries, isLoading, error, refetch, deleteGallery } = useGalleries()

  return (
    <>
      <Section
        bgColor="offWhite"
        rounded="none"
        className="bg-[#f5f5f2] pb-10 pt-24"
      >
        <SectionContent>
          <div className="flex flex-col gap-5 rounded-[1.75rem] border border-black/6 bg-white p-6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-textSecondary">
                Admin
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
                Dashboard
              </h1>
            </div>
            <Button
              onClick={onLogout}
              variant="outline"
              size="md"
              subVariant="rounded"
            >
              <LogOut className="mr-2 h-4 w-4" /> Logga ut
            </Button>
          </div>
        </SectionContent>
      </Section>

      <Section
        bgColor="white"
        rounded="none"
        className="bg-white py-12 md:py-16"
      >
        <SectionContent heading="Skapa / Lägg till i Galleri">
          <CreateGalleryForm galleries={galleries} onUploadSuccess={refetch} />
        </SectionContent>
      </Section>

      <Section
        bgColor="offWhite"
        rounded="none"
        className="bg-[#f5f5f2] py-12 md:py-16"
      >
        <SectionContent heading="Befintliga Gallerier">
          <GalleryList
            galleries={galleries}
            isLoading={isLoading}
            error={error}
            onDeleteGallery={deleteGallery}
          />
        </SectionContent>
      </Section>
    </>
  )
}
