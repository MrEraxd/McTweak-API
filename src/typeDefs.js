import { gql } from 'apollo-server'

export const typeDefs = gql`
  """
  Contains information about all posible queries.
  """
  type Query {
    availableCraftings: [Crafting]
    availableItemLists: [String]
    itemsByModName(modName: String): [Item]
    craftingByName(name: String): Crafting
  }

  """
  Contains information about all posible queries.
  """
  type Item {
    """
    Type of Item it can be "item" or "block"
    """
    type: String
    """
    Non-Numerical ID of mod that item is from
    """
    modId: String
    """
    Name of item in game
    """
    name: String
    """
    Name of item that will be displayed in App
    """
    displayName: String
    """
    Tag of item more information here: https://minecraft-archive.fandom.com/wiki/NBT_Tags
    """
    tag: String
    """
    Version of game that item is present
    """
    versions: String
    """
    Full name is create by taking type of item ex. it can be "item" or "block"
    then appending mod name ex. "minecraft" and adding name of item last "diorite".
    This will create "<item:minecraft:block>"
    """
    fullName: String
  }

  type ItemList {
    """
    Name of mod that item comes from
    """
    modName: String
    """
    Name of mod that will be displayed in App
    """
    modDisplayName: String
  }

  type Crafting {
    """
    Name of crafting that is used by craft tweaker
    """
    name: String
    """
    Name of crafting that will be displayed in App
    """
    displayName: String
    """
    Canvas for this crafting
    """
    canvas: Canvas
    """
    All possible types for current crafting, they are described in CraftTweaker wiki
    https://docs.blamejared.com/1.19/en/tutorial/Recipes/Crafting/ShapedRecipes
    """
    recipeTypes: [RecipeType]
    """
    Addinational inputs that are needed by recipe, they are displayed in recipe options.
    """
    addinationalInputs: [AddinationalInput]
    """
    Defines if crafting type is first on list in dropdown menu.
    """
    isFirst: Boolean
  }

  """
  Types of recipes that are possible for selected crafting type
  https://docs.blamejared.com/1.19/en/tutorial/Recipes/Crafting/crafting_table
  """
  type RecipeType {
    """
    Name of recipe type that is used by CraftTweaker
    """
    name: String
    """
    Name of recipe type that is displayed in App
    """
    displayName: String
    """
    Syntax of function that defines which items are placed where
    """
    functionSyntax: String
  }

  """
  These inputs are for creating addinational inputs for recipe and slot.
  For example slot need not only Item but also amount of this item.
  """
  type AddinationalInput {
    """
    Type of input for now only "string" is available
    """
    type: String
    """
    Label of input that will be displayed in App
    """
    displayName: String
    """
    String that will be replaced with value in sytax name
    """
    syntaxName: String
    """
    Default value
    """
    defaultValue: String
  }

  """
  Canvas Type holds all information about current board.
  """
  type Canvas {
    """
    Styles of canvas
    """
    style: CanvasStyle
    """
    Slots that will be displayed in craftin board
    """
    slots: [Slot]
    """
    Addinational slots that will be displayed after crafting board
    """
    bottomSlots: [Slot]
    """
    Text that will be displayed above bottom slots
    """
    bottomTitle: String
  }

  """
  Here we can set styles for Canvas, for now we can only change background color.
  All types have to be written in JS style CSS. E.x. background-color becomes backgroundColor.
  """
  type CanvasStyle {
    backgroundColor: String
  }

  """
  Slot contains information about one crafting slot.
  """
  type Slot {
    """
    Type of slot, it can be "decorative" or "input"
    """
    type: String
    """
    Name that will be displayed near slot options after clicking slot
    """
    displayName: String
    """
    String that will be replaced with value in sytax name
    """
    syntaxName: String
    """
    Addinational inputs that will be displayed in slot options
    """
    addinationalInputs: [AddinationalInput]
    """
    Styles of slot
    """
    style: SlotStyle
  }

  """
  Here we can set styles for single slot.
  All types have to be written in JS style CSS. E.x. background-color becomes backgroundColor.
  """
  type SlotStyle {
    width: String
    height: String
    top: String
    left: String
    borderRadius: String
    position: String
    outlineColor: String
  }
`
