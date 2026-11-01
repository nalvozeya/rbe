import { AppSidebar } from "@/components/app-sidebar"
import { SearchButton } from "@/components/search-button"
import {
  Archive,
  ChevronDown,
  Flag,
  Forward,
  FolderInput,
  Reply,
  ReplyAll,
  SquarePen,
  ShieldAlert,
  Trash2,
} from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="ms-auto flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Compose email"
            >
              <SquarePen aria-hidden="true" />
            </Button>
            <ButtonGroup aria-label="Reply actions">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Reply to email"
              >
                <Reply aria-hidden="true" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Reply all"
              >
                <ReplyAll aria-hidden="true" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Forward email"
              >
                <Forward aria-hidden="true" />
              </Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Email actions">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Archive email"
              >
                <Archive aria-hidden="true" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Report email as spam"
              >
                <ShieldAlert aria-hidden="true" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Delete email"
              >
                <Trash2 aria-hidden="true" />
              </Button>
            </ButtonGroup>
            <Button
              type="button"
              variant="outline"
              aria-label="Move email to folder"
            >
              <FolderInput data-icon="inline-start" aria-hidden="true" />
              <ChevronDown data-icon="inline-end" aria-hidden="true" />
            </Button>
            <ButtonGroup aria-label="Flag actions">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Flag email"
              >
                <Flag aria-hidden="true" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Flag options"
              >
                <ChevronDown aria-hidden="true" />
              </Button>
            </ButtonGroup>
            <SearchButton />
          </div>
        </header>
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-0 flex-1"
        >
          <ResizablePanel defaultSize="50%" minSize="25%" />
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="50%" minSize="40%" />
        </ResizablePanelGroup>
      </SidebarInset>
    </SidebarProvider>
  )
}
