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
      <Section bgColor="beige" roundedBottom="9xl" className="py-12">
        <SectionContent>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-textPrimary font-poiret">
              Admin Dashboard
            </h1>
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

      <Section roundedTop="9xl" roundedBottom="9xl">
        <SectionContent heading="Skapa / Lägg till i Galleri">
          <CreateGalleryForm galleries={galleries} onUploadSuccess={refetch} />
        </SectionContent>
      </Section>

      <Section bgColor="beige" roundedTop="9xl">
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