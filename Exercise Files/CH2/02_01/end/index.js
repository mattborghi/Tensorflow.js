const shape = [4,2];

// Create a tensor tensor
// arguments: elements and the shape
const data = tf.tensor([4,6,5,9,13,25,1, 57], shape);
// idem to but without specifying shape
const data2 = tf.tensor([[4,6], [5,9], [13,25], [1,57]])

data.print();
