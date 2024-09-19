import { View, Text } from "react-native";

const RepositoryItem = ({
  fullName,
  description,
  language,
  numberOfForks,
  numberOfStars,
  ratingAverage,
  numberOfReviews,
}) => {
  return (
    <View>
      <Text>Full Name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Forks: {numberOfForks}</Text>
      <Text>Stars: {numberOfStars}</Text>
      <Text>Rating: {ratingAverage}</Text>
      <Text>Reviews: {numberOfReviews}</Text>
    </View>
  );
};

export default RepositoryItem;
