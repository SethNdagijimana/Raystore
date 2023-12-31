export async function fileToDataURI(file: File) {
  const maxSizeInBytes = 5 * 1024 * 1024

  if (file && !file.type.startsWith("image/")) {
    // Valid image file selected, handle it here
    // toast({
    //   variant: "destructive",
    //   description: "File selected is not an image"
    // })

    return { error: true, url: null }
  }

  if (file && file.size >= maxSizeInBytes) {
    // toast({
    //   variant: "destructive",
    //   description: "Selected image exceeds the maximum file size (5MB)"
    // })

    return { error: true, url: null }
  }

  const url = new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const dataURI = reader.result
      resolve(dataURI)
    }

    reader.onerror = (error) => {
      reject(error)
    }

    reader.readAsDataURL(file)
  })

  return { success: true, url: (await url) as string }
}
