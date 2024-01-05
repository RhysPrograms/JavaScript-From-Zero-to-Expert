## Priority

1. Declarations marked !important
2. Inline Style (Style Attribute in a .html file)
3. ID (#) Selector
4. Class (.) or Pseudo-Class (:) Selector
5. Element Selector (p, div, li, etc)
6. Universal (\*) Selector

## Absolute Positioning vs. Floats

1. Normal Flow (Relative)

- Default Positioning
- Element is "in flow"
- Elements ae simply laid out according to their order in the HTML code

2. Absolute Positioning

- Element is removed from the normal flow: "out of flow"
- No impact on surrounding elements, might overlap them
- We use top, btotom, left, or right to offset the element from tis relatively positioned container

3. Floats

- Element is removed from the normal flow: "out of flow"
- Text and inline elements will wrap around the floated element
- The container will not adjust its height to the element

## Floats

- The float property is used for positioning and formatting content e.g. let an image float left to the text in a container.
  left - The element floats to the left of its container
  right - The element floats to the right of its container
  none - The element does not float (will be displayed just where it occurs in the text). This is default
  inherit - The element inherits the float value of its parent

- When we use the float property, and we want the next element below (not on right or left), we will have to use the clear property.
  none - The element is not pushed below left or right floated elements. This is default
  left - The element is pushed below left floated elements
  right - The element is pushed below right floated elements
  both - The element is pushed below both left and right floated elements
  inherit - The element inherits the clear value from its parent

- If an element is taller than the element containing it, and it is floated, it will overflow outside of its container. The new, modern clearfix hack is best to use, and the following code is used for most webpages:
  .clearfix::after {
  content: "";
  clear: both;
  display: table;
  }

## Flexbox

https://www.youtube.com/watch?v=phWxA89Dy94

- One-dimensional
- The main idea behind flexbox is that empty space inside a conainer element can be automatically divided by its child elements.
- Flexbox makes it easy to automatically align items to one another inside a parent container, both horizontally and vertically.
- Flexbox solves common problems such as vertical centering and creating equal-height columns.
- Flexbox is perfect for replacing floats, allowing us to write fewer and cleaner HTML and CSS code.

## Flexbox Terminology

- For the Flex Container, set the "display: flex" and all its direct children will become flex items.
- The Flex Direction, is naturally set to row (or horizontal), though we can change this via flex direction: column;

- Main Axis: Horizontal (justify-content)
- Cross Axis: Vertical (align-items)
- Flex-wrap: nowrap; is the default, but wrap; will allow children elements to continue on a different line when there is no additional space available.

## Flex Container

1. gap: 0 | <length>

- To create space between items, without using margin

2. justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly

- To align items along main aix (horizontally, by default)

3. align-items: stretch | flex-start | flex-end | center | baseline

- To align items along cross axis (vertically, by default)

4. flex-direction: row | row-reverse | column | column-reverse

- To define which is the main axis

5. flex-wrap: nowrap | wrap | wrap-reverse

- To allow items to wrap into a new line if they are too large

6. align-content: stretch | flex-start | flex-end | center | space-between | space-around

- Only applies when there are multiple lines (flex-wrap: wrap)

## Flex Items

1. align-self: auto | stretch | flex-start | flex-end | center | baseline

- To overwrite align-items for individual flex items

2. flex-grow: 0 | <integer>

- To allow an element to grow (0 means no, 1+ means yes)

3. flex-shrink: 1 | <integer>

- To allow an element to shrink (0 means no, 1+ means yes)

4. flex-basis: auto | <length>

- To define an item's width, instead of the width property

5. flex: 0 1 auto | <int> <int> <len>

- Recommended shorthand for flex-grow, -shrink, -basis

6. order: 0 | <integer>

- Controls order of items. -1 makes item first, 1 makes it last

## CSS Grid

https://www.youtube.com/watch?v=EiNiSFIPIQE

- CSS Grid is a set of CSS properties for building 2-dimensional layouts.
- The main idea behind CSS Grid is that we divide a container element into rows and columns that can be filled with its child elements
- In two-dimensional contexts, CSS Grid allows us to write less nested HTML and easier-to-read-CSS
- CSS Grid is not meant to replace flexbox! Instead, they work perfectly together. Need a 1D layout? Use flexbox. Need a 2D layout? Use CSS Grid.

## CSS Grid Terminology

- Grid Container (Parent)
- Grid Items (Child Elements)
- Column Axis
- Row Axis
- We cannot change the direction of the Column / Row Axis
- Grid Cell:
- Gutters (gaps)
- Grid track

Grid Lines
If we have three columns, then we have four grid lines. If we have two rows, then we have three grid lines.

## Grid Container

1. grid-template-rows: <track-size>
   grid-template-columns: <track-size>

- To establish the grid row and column tracks. One length unit for each track. Any unit can be used, new fr fills unused space.

2. row-gap: 0 | <length>
   column-gap: 0 | <length>
   gap: 0 | <length>

- To create empty space between tracks.

3. justify-items: stretch | start | center | end
   align-items: stretch | start | center | end

- To align items inside rows / columns (horizontally / vertically)

4. justify-content: start | start | center | end | ...
   align-content: start | start | center | end | ...

- To align entire grid inside grid container. Only applies if container is larger than the grid

## Grid Items

1. grid-column: <start line> / <end line> | span <number>
   grid-row: <start line> / <end line> | span <number>

- To place a grid item onto a specific cell, based on line numbers. span keyword can be used to span an item across more cells.

2. justify-self: stretch | start | center | end
   align-self: stretch | start | center | end

- To overwrite justify-items / align items for single items.

## Responsive Design Ingredients

1. Fluid Layouts

- To allow webpage to adapt to the current viewport width (or even height).
- Use % (or vh / vw) unit instead of px for elements that shoud adapt to viewport (usually layout).
- Use max-width instead of width.

2. Responsive Units

- Use rem unit instead of px for most lengths.
- To make it easy to scale the entire layout down (or up) automatically.
- Helpful trick: setting 1rem to 10px for easy calculations.

3. Flexible Images

- By default, images don't scale automatically as we change the viewport, so we need to fix that.
- Always use % for image dimensions, together with the max-width property.

4. Media Queries

- Bring responsive sites to life!
- To change CSS styles on certain viewport widths (called breakpoints).

## Desktop First vs Mobile First Development

### Desktop-First

- Start writing CSS for the desktop: large scale.
- Then, media queries shrink design to smaller screens.

### Mobile-First

- Start writing CSS for mobile devices: small screen.
- Then, media queries expand design to a large screen.
- Forces us to reduce websites and apps to the absolute essentials.
