import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import Style from './GuestBookListStyle'
import { Card, ListItem } from 'react-native-elements'

class GuestBookList extends React.PureComponent {
  constructor(props) {
    super(props)
    console.info('~GuestBookList->props', props)
    this.state = {
      ...this.props,
    }
  }

  render() {
    return (
      <ScrollView style={Style.container}>
        <Card>
          <ListItem
            roundAvatar
            title="Hello, World"
            leftAvatar={{ source: { uri: 'https://picsum.photos/200/300' } }}
            rightIcon={{ name: 'chevron-right' }}
          />
        </Card>
      </ScrollView>
    )
  }
}

GuestBookList.propTypes = {
  events: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    photo: PropTypes.string,
  }),
}

export default GuestBookList
