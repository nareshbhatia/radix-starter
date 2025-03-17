import {
  BoxIcon,
  InfoCircledIcon,
  MagnifyingGlassIcon,
  TextIcon,
  PlusIcon,
  FrameIcon,
  CrumpledPaperIcon,
  ScissorsIcon,
  Component1Icon,
  TokensIcon,
  FontFamilyIcon,
  LightningBoltIcon,
  StarIcon,
  AccessibilityIcon,
  BookmarkIcon,
  HeartIcon,
  Share2Icon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons';
import {
  Badge,
  Blockquote,
  Box,
  Button,
  Callout,
  Card,
  Checkbox,
  Container,
  DropdownMenu,
  Flex,
  Grid,
  Heading,
  HoverCard,
  IconButton,
  Inset,
  Link,
  Separator,
  Strong,
  Switch,
  Tabs,
  Text,
  TextField,
  Tooltip,
} from '@radix-ui/themes';
import * as React from 'react';

function LinksExample({ highContrast = false }: { highContrast?: boolean }) {
  return (
    <Blockquote>
      Susan Kare is an American{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link
            highContrast={highContrast}
            href="https://en.wikipedia.org/wiki/Graphic_design"
            target="_blank"
            underline="hover"
          >
            graphic designer
          </Link>
        </HoverCard.Trigger>
        <HoverCard.Content>
          <Flex>
            <Inset pr="current" side="left">
              <img
                alt="Graphic design"
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&h=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  height: 160,
                  width: 160,
                  backgroundColor: 'var(--gray-5)',
                  filter: 'contrast(1.05) brightness(1.05)',
                }}
              />
            </Inset>
            <Text as="p" size="2" style={{ maxWidth: 250 }}>
              <Strong>Graphic design</Strong> is a profession and applied art
              whose activity consists in projecting visual communications
              intended to transmit specific messages to people.
            </Text>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>{' '}
      and artist, who contributed{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link
            highContrast={highContrast}
            href="https://en.wikipedia.org/wiki/User_interface"
            target="_blank"
            underline="hover"
          >
            interface
          </Link>
        </HoverCard.Trigger>
        <HoverCard.Content>
          <Flex>
            <Inset pr="current" side="left">
              <img
                alt="A graphical user interface"
                src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&h=480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'right',
                  height: 160,
                  width: 160,
                  backgroundColor: 'var(--gray-5)',
                  filter: 'contrast(1.05) brightness(1.05)',
                }}
              />
            </Inset>
            <Text as="p" size="2" style={{ maxWidth: 250 }}>
              In the industrial design field of human–computer interaction, a{' '}
              <Strong>user interface</Strong> is the space where interactions
              between humans and machines occur.
            </Text>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>{' '}
      elements and{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link
            highContrast={highContrast}
            href="https://en.wikipedia.org/wiki/Typeface"
            target="_blank"
            underline="hover"
          >
            typefaces
          </Link>
        </HoverCard.Trigger>
        <HoverCard.Content>
          <Flex>
            <Inset pr="current" side="left">
              <img
                alt="A graphical user interface"
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=540&q=80"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  height: 160,
                  width: 160,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="2" style={{ maxWidth: 250 }}>
              A <Strong>typeface</Strong> or <Strong>font family</Strong> is a
              design of letters, numbers and other symbols, to be used in
              printing or for electronic display. There are thousands of
              different typefaces in existence, with new ones being developed
              constantly.
            </Text>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>{' '}
      for the first{' '}
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Link
            highContrast={highContrast}
            href="https://en.wikipedia.org/wiki/Typeface"
            target="_blank"
            underline="hover"
          >
            Apple Macintosh
          </Link>
        </HoverCard.Trigger>
        <HoverCard.Content>
          <Flex>
            <Inset pr="current" side="left">
              <img
                alt="A graphical user interface"
                src="https://images.unsplash.com/photo-1553469945-2adfe230284d?q=80&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: '80%',
                  height: 160,
                  width: 160,
                  backgroundColor: 'var(--gray-5)',
                  filter: 'grayscale(100%)',
                }}
              />
            </Inset>
            <Text as="p" size="2" style={{ maxWidth: 250 }}>
              The <Strong>Apple Macintosh</Strong>—later rebranded as the{' '}
              <Strong>Macintosh 128K</Strong>—was the first successful
              mass-market all-in-one desktop personal computer with a graphical
              user interface, built-in screen, and mouse.
            </Text>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>{' '}
      personal computer from 1983 to 1986.
    </Blockquote>
  );
}

export const itemsContent: Record<string, React.ReactElement> = {
  a: <span>Respond to comment #384 from Travis</span>,
  b: <span>Invite Acme Co. team to Slack</span>,
  c: <span>Create a report requested by Danilo</span>,
  d: <span>Close Q2 finances</span>,
  e: <span>Review invoice #3456</span>,
  f: <span>Complete map implementation</span>,
  g: <span>Take interview training</span>,
  h: <span>Book tickets for Config conference</span>,
};

interface ToDoItem {
  id: string;
  completed: boolean;
}

interface ToDoListProps {
  items: ToDoItem[];
  onItemsChange: (items: ToDoItem[]) => void;
}

function ToDoList({ items, onItemsChange }: ToDoListProps) {
  return (
    <Flex direction="column" gap="2">
      {items.map((item) => (
        <Text as="label" key={item.id} size="2">
          <Flex gap="2">
            <Checkbox
              checked={item.completed}
              onCheckedChange={(checked) => {
                const newItems = items.slice();
                const newItem = newItems.find(
                  (candidate) => candidate.id === item.id,
                ) as ToDoItem;
                newItem.completed = Boolean(checked);
                onItemsChange(newItems);
              }}
            />
            <Text
              color={item.completed ? 'gray' : undefined}
              style={
                {
                  textDecoration: item.completed ? 'line-through' : undefined,
                  '--accent-12': 'var(--accent-11)',
                } as React.CSSProperties
              }
            >
              {itemsContent[item.id]}
            </Text>
          </Flex>
        </Text>
      ))}
    </Flex>
  );
}

export function KitchenSinkPage() {
  const [state, setState] = React.useState({
    todo: [
      { id: 'a', completed: false },
      { id: 'b', completed: false },
      { id: 'c', completed: false },
      { id: 'd', completed: false },
      { id: 'e', completed: false },
      { id: 'f', completed: true },
      { id: 'g', completed: true },
      { id: 'h', completed: true },
    ],
  });

  return (
    <Container px="6" py="6" size="4">
      <Grid
        columns={{ initial: '1fr', sm: '320px 320px', lg: '320px 1fr 320px' }}
        gap="6"
        justify="center"
      >
        <Flex
          direction="column"
          gap="5"
          maxWidth="400px"
          mx="auto"
          width="100%"
        >
          <Flex gap="2">
            <Box flexGrow="1" flexShrink="0">
              <TextField.Root name="_" placeholder="Search" type="text">
                <TextField.Slot>
                  <MagnifyingGlassIcon />
                </TextField.Slot>
              </TextField.Root>
            </Box>
            <Button size="2">Submit</Button>
          </Flex>

          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>Please upgrade to the new version.</Callout.Text>
          </Callout.Root>

          <Flex
            align="center"
            gap="4"
            justify={{ initial: 'center', sm: 'between' }}
          >
            <Badge radius="full" variant="soft">
              Fully-featured
            </Badge>
            <Badge radius="full" variant="surface">
              Built with Radix
            </Badge>
            <Badge radius="full" variant="outline">
              Open source
            </Badge>
          </Flex>

          <Flex
            align="center"
            gap={{ initial: '4', sm: '0' }}
            justify={{ initial: 'center', sm: 'between' }}
          >
            <IconButton variant="solid">
              <Flex align="center" height="4" justify="center" width="4">
                <StarIcon />
              </Flex>
            </IconButton>
            <IconButton variant="solid">
              <Flex align="center" height="4" justify="center" width="4">
                <BookmarkIcon />
              </Flex>
            </IconButton>
            <IconButton variant="soft">
              <Flex align="center" height="4" justify="center" width="4">
                <AccessibilityIcon />
              </Flex>
            </IconButton>
            <IconButton variant="surface">
              <Flex align="center" height="4" justify="center" width="4">
                <HeartIcon />
              </Flex>
            </IconButton>
            <IconButton variant="outline">
              <Flex align="center" height="4" justify="center" width="4">
                <Share2Icon />
              </Flex>
            </IconButton>
            <Switch ml="2" size="1" />
            <Switch defaultChecked size="1" />
          </Flex>

          {[1, 2, 3].map((i) => (
            <Card key={i} size="2">
              <Flex align="center" gap="3">
                <Box>
                  <Text as="div" size="3" weight="medium">
                    Emily Adams
                  </Text>

                  <Text as="div" color="gray" size="2">
                    emily.adams@example.com
                  </Text>
                </Box>
              </Flex>
            </Card>
          ))}
        </Flex>

        <Flex
          direction="column"
          gap="6"
          maxWidth="400px"
          mx="auto"
          width="100%"
        >
          <Flex mt="-2" mx="auto">
            <Tabs.Root activationMode="manual" defaultValue="colors">
              <Tabs.List size="2">
                <Tabs.Trigger value="themes">Themes</Tabs.Trigger>
                <Tabs.Trigger value="primitives">Primitives</Tabs.Trigger>
                <Tabs.Trigger value="icons">Icons</Tabs.Trigger>
                <Tabs.Trigger value="colors">Colors</Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>
          </Flex>

          <Flex direction="column" gap="4">
            <Text size="2">
              <LinksExample />
            </Text>

            <Text color="gray" size="2">
              <LinksExample highContrast />
            </Text>
          </Flex>

          <Box
            p="4"
            style={{
              borderRadius: 'var(--radius-4)',
              backgroundColor: 'var(--gray-a2)',
            }}
          >
            <ToDoList
              items={state.todo}
              onItemsChange={(items) => {
                setState({ ...state, todo: items });
              }}
            />
          </Box>
        </Flex>

        <Flex
          direction="column"
          gap="5"
          gridColumn={{ initial: '1 / -1', lg: '2 / 3' }}
          gridRow={{ lg: '1' }}
        >
          <Flex display={{ initial: 'none', lg: 'flex' }} gap="4">
            <Flex
              align="center"
              gap="3"
              px="2"
              style={{
                boxShadow: 'inset 0 0 0 1px var(--gray-a6)',
                borderRadius: 'var(--radius-3)',
              }}
            >
              <Tooltip content="Add element">
                <IconButton color="gray" highContrast variant="ghost">
                  <Flex align="center" height="4" justify="center" width="4">
                    <PlusIcon />
                  </Flex>
                </IconButton>
              </Tooltip>

              <Separator orientation="vertical" size="1" />

              <Tooltip content="Frame">
                <IconButton color="gray" highContrast variant="ghost">
                  <Flex align="center" height="4" justify="center" width="4">
                    <FrameIcon />
                  </Flex>
                </IconButton>
              </Tooltip>
              <Tooltip content="Rectangle">
                <IconButton color="gray" highContrast variant="ghost">
                  <Flex align="center" height="4" justify="center" width="4">
                    <BoxIcon />
                  </Flex>
                </IconButton>
              </Tooltip>
              <Tooltip content="Components">
                <IconButton color="gray" highContrast variant="ghost">
                  <Flex align="center" height="4" justify="center" width="4">
                    <Component1Icon />
                  </Flex>
                </IconButton>
              </Tooltip>
              <Tooltip content="Tokens">
                <IconButton color="gray" highContrast variant="ghost">
                  <Flex align="center" height="4" justify="center" width="4">
                    <TokensIcon />
                  </Flex>
                </IconButton>
              </Tooltip>

              <Separator orientation="vertical" size="1" />

              <Tooltip content="Text">
                <IconButton color="gray" highContrast variant="ghost">
                  <Flex align="center" height="4" justify="center" width="4">
                    <TextIcon />
                  </Flex>
                </IconButton>
              </Tooltip>
              <Tooltip content="Typography">
                <IconButton color="gray" highContrast variant="ghost">
                  <Flex align="center" height="4" justify="center" width="4">
                    <FontFamilyIcon />
                  </Flex>
                </IconButton>
              </Tooltip>
              <Tooltip content="Fill with AI">
                <IconButton color="gray" highContrast variant="ghost">
                  <Flex align="center" height="4" justify="center" width="4">
                    <LightningBoltIcon />
                  </Flex>
                </IconButton>
              </Tooltip>

              <Separator orientation="vertical" size="1" />

              <Tooltip content="Scissors">
                <IconButton color="gray" highContrast variant="ghost">
                  <Flex align="center" height="4" justify="center" width="4">
                    <ScissorsIcon />
                  </Flex>
                </IconButton>
              </Tooltip>
              <Tooltip content="Archive">
                <IconButton color="gray" highContrast variant="ghost">
                  <Flex align="center" height="4" justify="center" width="4">
                    <CrumpledPaperIcon />
                  </Flex>
                </IconButton>
              </Tooltip>
            </Flex>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Box asChild flexGrow="1">
                  <Button color="gray" highContrast size="2" variant="surface">
                    Actions
                    <DropdownMenu.TriggerIcon />
                  </Button>
                </Box>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Group>
                  <DropdownMenu.Item shortcut="⌘ C">Copy</DropdownMenu.Item>
                  <DropdownMenu.Item shortcut="⌘ V">Paste</DropdownMenu.Item>
                  <DropdownMenu.Item shortcut="⇧ ⌘ R">
                    Paste to replace
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>Layers</DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item shortcut="⇧ ⌘ ]">
                      Move to top
                    </DropdownMenu.Item>
                    <DropdownMenu.Item shortcut="⌘ ]">
                      Move up
                    </DropdownMenu.Item>
                    <DropdownMenu.Item shortcut="⌘ [">
                      Move down
                    </DropdownMenu.Item>
                    <DropdownMenu.Item shortcut="⇧ ⌘ [">
                      Move to bottom
                    </DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>
                    Boolean groups
                  </DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item>Union</DropdownMenu.Item>
                    <DropdownMenu.Item>Subtract</DropdownMenu.Item>
                    <DropdownMenu.Item>Intersect</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘ E">Merge</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>

          <Flex direction="column">
            <Flex
              direction="column"
              mx={{ initial: '-5', xs: '-6', sm: '0' }}
              position="relative"
              px={{ initial: '6', sm: '8' }}
            >
              <Box position="relative">
                <Heading align="center" as="h3" mb="4" size="6">
                  Sign up
                </Heading>

                <Box maxWidth="400px" mx="auto">
                  <Card size="4">
                    <Flex direction="column" mb="5">
                      <Flex>
                        <Text
                          as="label"
                          htmlFor="example-name"
                          mb="1"
                          size="2"
                          trim="start"
                          weight="medium"
                        >
                          Full name
                        </Text>
                      </Flex>
                      <TextField.Root
                        id="example-name"
                        placeholder="Enter your name"
                      />
                    </Flex>

                    <Flex direction="column" mb="5">
                      <Flex>
                        <Text
                          as="label"
                          htmlFor="example-email"
                          mb="1"
                          size="2"
                          weight="medium"
                        >
                          Email
                        </Text>
                      </Flex>
                      <TextField.Root
                        id="example-email"
                        placeholder="Enter your email address"
                      />
                    </Flex>

                    <Flex direction="column" mb="5">
                      <Flex>
                        <Text
                          as="label"
                          htmlFor="example-password"
                          mb="1"
                          size="2"
                          weight="medium"
                        >
                          Password
                        </Text>
                      </Flex>
                      <TextField.Root
                        id="example-password"
                        placeholder="Enter your password"
                      />
                    </Flex>

                    <Grid
                      gap="4"
                      mt="5"
                      style={
                        { '--cursor-button': 'pointer' } as React.CSSProperties
                      }
                    >
                      <Button>Create account</Button>
                      <Flex align="center" gap="3">
                        <Separator size="4" />
                        <Text color="gray" size="1">
                          OR
                        </Text>
                        <Separator size="4" />
                      </Flex>
                      <Button color="gray" highContrast variant="surface">
                        <GitHubLogoIcon />
                        Continue with GitHub
                      </Button>
                    </Grid>
                  </Card>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Grid>
    </Container>
  );
}
