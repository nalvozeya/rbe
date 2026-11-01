"use client"

import {
  Archive,
  Clock3,
  Ellipsis,
  FileText,
  Folder,
  Inbox,
  Pencil,
  Send,
  Star,
  Tag,
  Trash2,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@workspace/ui/components/sidebar"

const sampleUnreadCount = 5

const folders: {
  label: string
  icon: LucideIcon
  href: string
  active?: boolean
  unreadCount?: number
}[] = [
  {
    label: "Inbox",
    icon: Inbox,
    href: "#inbox",
    active: true,
    unreadCount: sampleUnreadCount,
  },
  { label: "Starred", icon: Star, href: "#starred" },
  { label: "Snoozed", icon: Clock3, href: "#snoozed" },
  { label: "Sent", icon: Send, href: "#sent" },
  { label: "Drafts", icon: FileText, href: "#drafts" },
  { label: "Archive", icon: Archive, href: "#archive" },
  { label: "Spam", icon: TriangleAlert, href: "#spam" },
  { label: "Trash", icon: Trash2, href: "#trash" },
]

const labels = ["Finance", "Personal", "Work"]
const customFolders = ["Projects", "Receipts", "Travel"]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Mail</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {folders.map(
                ({ label, icon: Icon, href, active, unreadCount }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton
                      render={
                        <a
                          href={href}
                          aria-current={active ? "page" : undefined}
                        />
                      }
                      isActive={active}
                      aria-label={
                        unreadCount ? `${label}, ${unreadCount} unread` : label
                      }
                      tooltip={
                        unreadCount ? `${label}, ${unreadCount} unread` : label
                      }
                    >
                      <Icon />
                      <span>{label}</span>
                    </SidebarMenuButton>
                    {unreadCount ? (
                      <SidebarMenuBadge aria-hidden="true">
                        {unreadCount}
                      </SidebarMenuBadge>
                    ) : null}
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Folders</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {customFolders.map((folder) => (
                <SidebarMenuItem key={folder}>
                  <SidebarMenuButton
                    render={<a href={`#folder-${folder.toLowerCase()}`} />}
                    tooltip={folder}
                  >
                    <Folder />
                    <span>{folder}</span>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <SidebarMenuAction
                          showOnHover
                          aria-label={`Actions for ${folder}`}
                        />
                      }
                    >
                      <Ellipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" side="right">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Pencil />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                          <Trash2 />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Labels</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {labels.map((label) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton
                    render={<a href={`#label-${label.toLowerCase()}`} />}
                    tooltip={label}
                  >
                    <Tag />
                    <span>{label}</span>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <SidebarMenuAction
                          showOnHover
                          aria-label={`Actions for ${label}`}
                        />
                      }
                    >
                      <Ellipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" side="right">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Pencil />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                          <Trash2 />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
