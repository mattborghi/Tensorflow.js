//  sequential model
const model = tf.sequential();

model.add(
    // https://js.tensorflow.org/api/latest/#layers.simpleRNN
    tf.layers.simpleRNN({
        // only needed first layer
        inputShape: [20, 4],
        // the number of units or neurons
        units: 20,
        // weight
        recurrentInitializer: 'GlorotNormal',
    })
);
