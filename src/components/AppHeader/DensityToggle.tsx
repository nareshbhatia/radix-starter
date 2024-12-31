import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { IconButton, DropdownMenu, useThemeContext } from '@radix-ui/themes';

enum Scaling {
  Default = '100%',
  Comfortable = '110%',
  Compact = '90%',
}

const scalingToString: Record<Scaling, string> = {
  [Scaling.Default]: 'Default',
  [Scaling.Comfortable]: 'Comfortable',
  [Scaling.Compact]: 'Compact',
};

export function DensityToggle() {
  const themeContext = useThemeContext();
  const { scaling, onScalingChange } = themeContext;

  const handleScalingChange = (scalingValue: Scaling) => {
    onScalingChange(scalingValue);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="ghost">
          <DotsVerticalIcon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {Object.values(Scaling).map((scalingValue) => (
          <DropdownMenu.CheckboxItem
            checked={scaling === scalingValue}
            key={scalingValue}
            onClick={() => {
              handleScalingChange(scalingValue);
            }}
          >
            {scalingToString[scalingValue]}
          </DropdownMenu.CheckboxItem>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
