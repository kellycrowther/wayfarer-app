import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Style from './EventDetailScreenStyle'
// import EventsActions from 'App/Stores/Events/Actions'

export default function EventDetailScreen() {
  const event = useSelector((state) => state.events.events.find((event) => event.id === 1))

  return (
    <View style={Style.container}>
      <View>
        <Text style={Style.title}>{event.name}</Text>
        <Image source={{ uri: event.photo }} style={Style.heroImage} />
        <View style={Style.likeContainer}>
          <TouchableOpacity style={Style.likeButton}>
            <FontAwesome name="heart" style={Style.likeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Style.infoContainer}>
        <View style={Style.headerContainer}>
          <Text style={Style.header}>Description</Text>
        </View>
        <View>
          <Text style={Style.description}>{event.description}</Text>
        </View>
        <View>
          <Text style={Style.header}>Address</Text>
          <Text>Address Informatino</Text>
          <Text>City, State 97701</Text>
        </View>
      </View>
    </View>
  )
}
