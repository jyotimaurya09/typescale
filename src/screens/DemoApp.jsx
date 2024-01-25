import { Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Surface, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';


const DemoApp = ({ itemsData }) => {
  //console.log("Got items inside demo app: ", itemsData)
  const items = itemsData[0]
  const calculateValues = () => {
    const h1 = parseFloat((items.bodySize * items.scale * items.scale * items.scale * items.scale * items.scale * items.scale).toFixed(2));
    const h2 = parseFloat((items.bodySize * items.scale * items.scale * items.scale * items.scale * items.scale).toFixed(2));
    const h3 = parseFloat((items.bodySize * items.scale * items.scale * items.scale * items.scale).toFixed(2));
    const h4 = parseFloat((items.bodySize * items.scale * items.scale * items.scale).toFixed(2));
    const h5 = parseFloat((items.bodySize * items.scale * items.scale).toFixed(2));
    const h6 = parseFloat((items.bodySize * items.scale).toFixed(2));
    const p = items.bodySize
    const large = parseFloat((items.bodySize * items.scale).toFixed(2));
    const small = parseFloat((items.bodySize / items.scale).toFixed(2));
    const headingLineHeight = items.headingLineHeight;
    const bodyLineHeight = items.bodyLineHeight;
    const headingLetterSpacing = items.headingLetterSpacing;
    const bodyLetterSpacing = items.bodyLetterSpacing;
    const headingWeight = items.headingWeight;
    const bodyWeight = items.bodyWeight;
    return { h1, h2, h3, h4, h5, h6, p, small, large, headingLineHeight, bodyLineHeight, headingLetterSpacing, bodyLetterSpacing, headingWeight, bodyWeight }
  }

  const { h1, h2, h3, h4, h5, h6, p, small, large, headingLineHeight, bodyLineHeight, headingLetterSpacing, bodyLetterSpacing, headingWeight, bodyWeight } = calculateValues();


  return (
    <ScrollView>
      <Surface style={styles.mainContainer}>
        <Surface style={styles.headerContainer} elevation={0}>
          <Surface style={styles.leftHeaderConatiner} elevation={0}>
            <Icon name="save" size={32} color={'gray'} />
            <Text>Demo App</Text>
          </Surface>
          <Surface style={styles.rightHeaderConatiner} elevation={0}>
            <Icon name="menufold" size={32} color={'gray'} />
          </Surface>
        </Surface>
        <Surface elevation={0} style={{ margin: 20 }}>
          <Surface style={[styles.section1,]} elevation={0}>
            <Text style={{
              fontSize: h1,
              lineHeight: h1 * headingLineHeight,
              fontWeight: headingWeight,
              letterSpacing: headingLetterSpacing
            }}>Your digital transformation begins here</Text>
          </Surface>
          <Surface style={styles.section2} elevation={0}>
            <Text style={{
              fontSize: p,
              fontWeight: bodyWeight,
              letterSpacing: bodyLetterSpacing,
              lineHeight: p * bodyLineHeight
            }}>Unlock the full potential of your business. Start your journey today and experience the future of business software.</Text>
          </Surface>
          <Surface style={styles.section3} elevation={0}>
            <Surface style={styles.buttonContainer} elevation={0}>
              <Text style={[{
                fontSize: p,
                fontWeight: bodyWeight,
                letterSpacing: bodyLetterSpacing,
                lineHeight: p * bodyLineHeight
              }, styles.button]}>Explore features</Text>
            </Surface>
            <Surface style={styles.buttonContainer} elevation={0}>
              <Text style={[{
                fontSize: p,
                fontWeight: bodyWeight,
                letterSpacing: bodyLetterSpacing,
                lineHeight: p * bodyLineHeight
              }, styles.button]}>Get started</Text>
            </Surface>
          </Surface>
          <Surface style={styles.section4} elevation={0}>
            <Text style={{
              fontSize: p,
              fontWeight: bodyWeight,
              letterSpacing: bodyLetterSpacing,
              lineHeight: p * bodyLineHeight
            }}>No credit card required</Text>
          </Surface>

          <Surface style={styles.section5} elevation={0}>
            <Image source={
              require("../images/black-cat.png")
            } />
          </Surface>
          <Surface style={[styles.section6,]} elevation={0}>
            <Text style={{
              fontSize: h2,
              textAlign: 'center',
              fontWeight: headingWeight,
              letterSpacing: headingLetterSpacing,
              lineHeight: h2 * headingLineHeight
            }}>SaaS solutions that drive results</Text>
          </Surface>
          <Surface style={[styles.section7,]} elevation={0}>
            <Text style={{
              fontSize: h4, textAlign: 'center',
              fontWeight: headingWeight,
              letterSpacing: headingLetterSpacing,
              lineHeight: h4 * headingLineHeight
            }}>Explore our suite of powerful software solutions.</Text>
          </Surface>
          <Surface style={[styles.section8,]} elevation={0}>
            <Text style={{
              fontSize: h5,
              fontWeight: headingWeight,
              letterSpacing: headingLetterSpacing,
              lineHeight: h5 * headingLineHeight
            }}>Enterprise planning</Text>
          </Surface>
          <Surface style={[styles.section9,]} elevation={0}>
            <Text style={{
              fontSize: p,
              fontWeight: bodyWeight,
              letterSpacing: bodyLetterSpacing,
              lineHeight: p * bodyLineHeight
            }}>Seamlessly manage and integrate all core business functions to optimize efficiency and productivity.</Text>
          </Surface>

          <Surface style={[styles.section8,]} elevation={0}>
            <Text style={{
              fontSize: h5,
              fontWeight: headingWeight,
              letterSpacing: headingLetterSpacing,
              lineHeight: h5 * headingLineHeight
            }}>Project management</Text>
          </Surface>
          <Surface style={[styles.section9,]} elevation={0}>
            <Text style={{
              fontSize: p,
              fontWeight: bodyWeight,
              letterSpacing: bodyLetterSpacing,
              lineHeight: p * bodyLineHeight
            }}>Ensure project success by efficiently planning, executing, and tracking your initiatives with our project management software.</Text>
          </Surface>

          <Surface style={[styles.section8,]} elevation={0}>
            <Text style={{
              fontSize: h5,
              fontWeight: headingWeight,
              letterSpacing: headingLetterSpacing,
              lineHeight: h5 * headingLineHeight
            }}>Analytics and reporting</Text>
          </Surface>
          <Surface style={[styles.section9,]} elevation={0}>
            <Text style={{
              fontSize: p,
              fontWeight: bodyWeight,
              letterSpacing: bodyLetterSpacing,
              lineHeight: p * bodyLineHeight
            }}>Leverage data-driven insights to make informed decisions and stay ahead of the competition.</Text>
          </Surface>

          <Surface style={styles.section10} elevation={0}>
            <Image source={
              require("../images/worker.png")
            } />
          </Surface>
          <Surface style={[styles.section1,]} elevation={0}>
            <Text style={{
              fontSize: h3,
              fontWeight: headingWeight,
              letterSpacing: headingLetterSpacing,
              lineHeight: h3 * headingLineHeight
            }}>Customization and integration</Text>
          </Surface>
          <Surface style={styles.section2} elevation={0}>
            <Text style={{
              fontSize: p,
              fontWeight: bodyWeight,
              letterSpacing: bodyLetterSpacing,
              lineHeight: p * bodyLineHeight
            }}>Our SaaS solutions are flexible and can be tailored to your specific business requirements. We understand that each organization is unique, and we are committed to delivering software that fits your needs like a glove.</Text>
          </Surface>
          <Surface style={[styles.section3, { justifyContent: 'flex-start' }]} elevation={0}>
            <Surface style={styles.buttonContainer} elevation={0}>
              <Text style={[{
                fontSize: p,
                fontWeight: bodyWeight,
                letterSpacing: bodyLetterSpacing,
                lineHeight: p * bodyLineHeight
              }, styles.button]}>Learn More</Text>
            </Surface>
          </Surface>

          <Surface style={styles.section10} elevation={0}>
            <Image source={
              require("../images/support.png")
            } />
          </Surface>
          <Surface style={[styles.section1,]} elevation={0}>
            <Text style={{
              fontSize: h3,
              fontWeight: headingWeight,
              letterSpacing: headingLetterSpacing,
              lineHeight: h3 * headingLineHeight
            }}>Dedicated support</Text>
          </Surface>
          <Surface style={styles.section2} elevation={0}>
            <Text style={{
              fontSize: p,
              fontWeight: bodyWeight,
              letterSpacing: bodyLetterSpacing,
              lineHeight: p * bodyLineHeight
            }}>Zephtor provides ongoing support and training to ensure you maximize the value of our software. Our experts are here to assist you at every step of your digital transformation journey.</Text>
          </Surface>
          <Surface style={[styles.section3, { justifyContent: 'flex-start' }]} elevation={0}>
            <Surface style={styles.buttonContainer} elevation={0}>
              <Text style={[{
                fontSize: p,
                fontWeight: bodyWeight,
                letterSpacing: bodyLetterSpacing,
                lineHeight: p * bodyLineHeight
              }, styles.button]}>Learn More</Text>
            </Surface>
          </Surface>


        </Surface>

        <Surface style={[styles.footer,]} elevation={0}>
          <Surface style={styles.headerContainer} elevation={0}>
            <Surface style={styles.leftHeaderConatiner} elevation={0}>
              <Icon name="save" size={32} color={'gray'} />
              <Text>Demo App</Text>
            </Surface>
          </Surface>
          <Text style={{ fontSize: small }}>Your digital transformation partner.</Text>
          <Surface style={styles.table} elevation={0}>
            <Surface style={styles.column} elevation={0}>
              <Text>Quick Links</Text>
              <Text>Home</Text>
              <Text>Features</Text>
              <Text>Pricing</Text>
              <Text>About Us</Text>
              <Text>Contact Us</Text>
            </Surface>
            <Surface style={styles.column} elevation={0}>
              <Text>Quick Links</Text>
              <Text>Home</Text>
              <Text>Features</Text>
              <Text>Pricing</Text>
              <Text>About Us</Text>
              <Text>Contact Us</Text>
            </Surface>
            <Surface style={styles.column} elevation={0}>
              <Text>Quick Links</Text>
              <Text>Home</Text>
              <Text>Features</Text>
              <Text>Pricing</Text>
              <Text>About Us</Text>
              <Text>Contact Us</Text>
            </Surface>

          </Surface>


        </Surface>

      </Surface >
    </ScrollView>
  )
}

export default DemoApp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftHeaderConatiner: {
    flexDirection: 'row',
    width: '55%',
    justifyContent: 'space-between'
  },
  rightHeaderConatiner: {
    //alignItems: 'flex-end',
    //justifyContent: 'center',
  },
  section1: {
    paddingTop: 40,
  },
  section2: {
    paddingVertical: 20,
  },
  section3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: '40%',
    borderRadius: 25,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    color: 'white',
    alignSelf: 'center',
  },
  section4: {
    paddingVertical: 10,
  },
  section5: {
    marginVertical: 10,
    marginTop: 20,
  },
  section6: {
    alignItems: 'center',
    marginTop: 40
  },
  section7: {
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginBottom: 20,
  },
  section8: {
    //backgroundColor: 'green'
    marginTop: 20,
  },
  section9: {
    marginVertical: 10,
  },
  section10: {
    marginTop: 120,
    marginBottom: 40,
    alignItems: 'center'
  },
  footer: {
    marginTop: 100,
    backgroundColor: '#d3d3d3',
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 80,
    padding: 20
  },
  column: {
    flex: 1,
  }

})