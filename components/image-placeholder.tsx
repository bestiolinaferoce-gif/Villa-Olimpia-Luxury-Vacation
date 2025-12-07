export default function ImagePlaceholder({ text = "Foto in arrivo" }: { text?: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="text-center p-8">
        <svg className="w-24 h-24 mx-auto mb-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
        <p className="text-blue-600 font-medium">{text}</p>
      </div>
    </div>
  )
}


