import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import Style from './GuestBookListStyle'
import { Card, ListItem } from 'react-native-elements'
import { GuestBooksProps } from 'App/Models/GuestBookModels'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const LikesComponent = (likes) => {
  return (
    <View style={Style.likeComponent}>
      <Text>{likes}</Text>
      <FontAwesome name="thumbs-up" style={Style.likeIcon} />
    </View>
  )
}

class GuestBookList extends React.PureComponent {
  constructor(props) {
    super(props)
    console.info('~GuestBookList->props', props)
    this.state = {
      ...this.props,
    }
  }

  renderEntries(props) {
    const entries = props.entries
    const entriesList = entries.map((entry, x) => (
      <Card key={x}>
        <ListItem
          roundAvatar
          title={entry.title}
          subtitle={entry.subtitle}
          subtitleProps={{ numberOfLines: 2 }}
          leftAvatar={{ source: { uri: 'https://picsum.photos/200/300' } }}
          rightIcon={LikesComponent(entry.likes)}
          chevron
        />
      </Card>
    ))
    return entriesList
  }

  render() {
    let entries = this.renderEntries(this.state.guestBooks)
    return <ScrollView style={Style.container}>{entries}</ScrollView>
  }
}

GuestBookList.propTypes = {
  guestBooks: GuestBooksProps,
}

export default GuestBookList
