import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import Card from "./card";

describe('Card', () => {
  it('renders correctly with children', () => {
    const { getByText } = render(
      <Card>
        <Text>Child content</Text>
      </Card>
    );

    expect(getByText('Card Component')).toBeTruthy();
    expect(getByText('Child content')).toBeTruthy();
  });
});