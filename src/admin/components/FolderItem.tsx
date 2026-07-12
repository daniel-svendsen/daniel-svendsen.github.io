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
    <div className="group relative flex aspect-square cursor-pointer flex-col items-center justify-center rounded-[1.15rem] border border-black/6 bg-white transition hover:bg-[#f8f8f5]">
      <div
        onClick={() => onNavigate(path)}
        className="flex h-full w-full flex-col items-center justify-center p-4"
      >
        <Folder className="h-14 w-14 text-textSecondary transition-colors group-hover:text-textPrimary" />
        <p className="mt-3 w-full truncate px-2 text-center text-sm font-semibold">
          {folderName}
        </p>
      </div>
      <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          onClick={handleClearClick}
          className="rounded-full bg-destructive p-2 text-white shadow-lg hover:bg-destructive/85"
          aria-label={`Töm mappen ${folderName}`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
