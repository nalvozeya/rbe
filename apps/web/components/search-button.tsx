import { Search } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export function SearchButton() {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Search mail"
    >
      <Search aria-hidden="true" />
    </Button>
  )
}
