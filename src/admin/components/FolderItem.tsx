import React from 'react'
import { Folder, Trash2 } from 'lucide-react'

interface FolderItemProps {
  path: string
  onNavigate: (path: string) => void
  onClearFolder: (path: string) => void
}

export function FolderItem({
  path,
  onNavigate,
  onClearFolder,
}: FolderItemProps) {
  const folderName = path.split('/').filter(Boolean).pop()

  const handleClearClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClearFolder(path)
  }

  return (
    <div className="relative group aspect-square flex flex-col items-center justify-center bg-secondary rounded-lg cursor-pointer transition-colors hover:bg-secondary/80">
      <div onClick={() => onNavigate(path)}>
        <Folder className="w-16 h-16 text-textSecondary" />
        <p className="mt-2 text-sm font-medium text-center truncate w-full px-2">
          {folderName}
        </p>
      </div>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleClearClick}
          className="p-2 bg-destructive text-white rounded-full hover:bg-destructive/80"
          aria-label={`Töm mappen ${folderName}`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}