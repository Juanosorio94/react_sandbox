# React

## Props

props are read-only. In React data flows one way, and can only be passed *down* to children.

*IF* a child needs to send data to its parent, the parent can send down a function as a prop like this  ´´´ function handleAction(event) { console.log('child did:' , event); }

children prop:
  * when only one element is passed as a children, this is a ReactElement Object, if more than one, this is an Array.

Each child in an array or iterator should have a unique key prop.

line height: pretty self explanatory. sets vertical distance between lines.


::before selector: with content atribute set something before the actual content.


#### on passing objects as props:
We could instead just pass the tweet object itself. For instance, instead of passing a timestamp directly
to the Time component, we could pass in tweet and let it extract the timestamp from the tweet. Why
not do it that way? Here are a few reasons:
• It hurts reusability - If Time expects an object with a property called “timestamp”, then it’s
locked in to that structure. What if you have a user with an timestamp property called “up-
dated_at” and want to render it with a Time component? Well, you can’t, without hacking to-
gether a temporary object that “looks like” what Time expects, or changing the implementation
of Time (potentially breaking other uses of it).
• It’s harder to change - The Time component would have knowledge of the inner structure of a
tweet object. This might not seem like a big deal, until you have 10 components like this, and
the backend developer decides that “timeStamp” with a capital “S” looks better than “timestamp”
and now you have to update all those components. It’s a good idea to keep the knowledge of
data structures contained to as few places as possible to reduce the cost of change.

