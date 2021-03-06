/// <reference path="./node_modules/nativescript-ui-core/ios.d.ts" />

declare class TKAutoCompleteClearButton extends UIButton {

	static alloc(): TKAutoCompleteClearButton; // inherited from NSObject

	static appearance(): TKAutoCompleteClearButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteClearButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteClearButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteClearButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteClearButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteClearButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): TKAutoCompleteClearButton; // inherited from UIButton

	static new(): TKAutoCompleteClearButton; // inherited from NSObject

	circleBackgroundColor: UIColor;
}

declare class TKAutoCompleteCollectionViewCell extends UICollectionViewCell {

	static alloc(): TKAutoCompleteCollectionViewCell; // inherited from NSObject

	static appearance(): TKAutoCompleteCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteCollectionViewCell; // inherited from UIAppearance

	static new(): TKAutoCompleteCollectionViewCell; // inherited from NSObject

	readonly label: UILabel;
}

declare const enum TKAutoCompleteCompletionMode {

	StartsWith = 0,

	Contains = 1
}

declare class TKAutoCompleteController extends UIViewController {

	static alloc(): TKAutoCompleteController; // inherited from NSObject

	static new(): TKAutoCompleteController; // inherited from NSObject

	autocomplete: TKAutoCompleteTextView;
}

declare class TKAutoCompleteCoverView extends UIView {

	static alloc(): TKAutoCompleteCoverView; // inherited from NSObject

	static appearance(): TKAutoCompleteCoverView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteCoverView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteCoverView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteCoverView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteCoverView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteCoverView; // inherited from UIAppearance

	static new(): TKAutoCompleteCoverView; // inherited from NSObject

	visibleRect: CGRect;
}

interface TKAutoCompleteDataSource extends NSObjectProtocol {

	autoCompleteCompletionForPrefix?(autocomplete: TKAutoCompleteTextView, prefix: string): NSArray<TKAutoCompleteToken>;

	autoCompleteCompletionsForString?(autocomplete: TKAutoCompleteTextView, input: string): void;

	currentCompletionMode;
}
declare var TKAutoCompleteDataSource: {

	prototype: TKAutoCompleteDataSource;
};

declare class TKAutoCompleteDataSourceAutoCompleteSettings extends NSObject {

	static alloc(): TKAutoCompleteDataSourceAutoCompleteSettings; // inherited from NSObject

	static new(): TKAutoCompleteDataSourceAutoCompleteSettings; // inherited from NSObject

	completionMode: TKAutoCompleteCompletionMode;

	highlightColor: UIColor;

	highlightMatch: boolean;

	valueKey: string;

	createToken(createToken: (p1: number, p2: any) => TKAutoCompleteToken): void;

	tokenForItemAtIndexFromDataSource(item: any, dataIndex: number, dataSource: TKDataSourceExtended): TKAutoCompleteToken;
}

declare class TKAutoCompleteDataSourceCollectionViewSettings extends NSObject {

	static alloc(): TKAutoCompleteDataSourceCollectionViewSettings; // inherited from NSObject

	static new(): TKAutoCompleteDataSourceCollectionViewSettings; // inherited from NSObject

	createCell(cellIdForItem: (p1: UICollectionView, p2: NSIndexPath, p3: any) => UICollectionViewCell): void;

	ds_cellForItemAtIndexPathInCollectionView(item: any, indexPath: NSIndexPath, collectionView: UICollectionView): UICollectionViewCell;

	ds_initCellWithItemAtIndexPathInGroupFromDataSourceInCollectionView(cell: UICollectionViewCell, item: any, indexPath: NSIndexPath, group: TKAutoCompleteDataSourceGroup, dataSource: TKDataSourceExtended, collectionView: UICollectionView): void;

	initCell(initCellWithItem: (p1: UICollectionView, p2: NSIndexPath, p3: UICollectionViewCell, p4: any) => void): void;
}

declare const enum TKAutoCompleteDataSourceDataFormat {

	JSON = 0
}

declare class TKAutoCompleteDataSourceFilterDescriptor extends NSObject {

	static alloc(): TKAutoCompleteDataSourceFilterDescriptor; // inherited from NSObject

	static new(): TKAutoCompleteDataSourceFilterDescriptor; // inherited from NSObject

	readonly filterBlock: (p1: any) => boolean;

	readonly query: string;

	constructor(o: { block: (p1: any) => boolean; });

	constructor(o: { query: string; });

	evaluate(item: any): boolean;

	initWithBlock(filterBlock: (p1: any) => boolean): this;

	initWithQuery(query: string): this;
}

declare class TKAutoCompleteDataSourceGroup extends NSObject {

	static alloc(): TKAutoCompleteDataSourceGroup; // inherited from NSObject

	static new(): TKAutoCompleteDataSourceGroup; // inherited from NSObject

	displayKey: string;

	items: NSArray<any>;

	key: any;

	valueKey: string;

	constructor(o: { items: NSArray<any>; });

	constructor(o: { items: NSArray<any>; valueKey: string; });

	constructor(o: { items: NSArray<any>; valueKey: string; displayKey: string; });

	initWithItems(items: NSArray<any>): this;

	initWithItemsValueKey(items: NSArray<any>, valueKey: string): this;

	initWithItemsValueKeyDisplayKey(items: NSArray<any>, valueKey: string, displayKey: string): this;
}

declare class TKAutoCompleteDataSourceGroupDescriptor extends NSObject {

	static alloc(): TKAutoCompleteDataSourceGroupDescriptor; // inherited from NSObject

	static new(): TKAutoCompleteDataSourceGroupDescriptor; // inherited from NSObject

	readonly comparatorBlock: (p1: any, p2: any) => NSComparisonResult;

	readonly keyForItemBlock: (p1: any) => any;

	propertyName: string;

	constructor(o: { block: (p1: any) => any; });

	constructor(o: { block: (p1: any) => any; comparator: (p1: any, p2: any) => NSComparisonResult; });

	constructor(o: { property: string; });

	constructor(o: { property: string; comparator: (p1: any, p2: any) => NSComparisonResult; });

	initWithBlock(keyForItemBlock: (p1: any) => any): this;

	initWithBlockComparator(keyForItemBlock: (p1: any) => any, comparatorBlock: (p1: any, p2: any) => NSComparisonResult): this;

	initWithProperty(propertyName: string): this;

	initWithPropertyComparator(propertyName: string, comparatorBlock: (p1: any, p2: any) => NSComparisonResult): this;

	keyForItem(item: any): any;
}

declare class TKAutoCompleteDataSourceSettings extends NSObject {

	static alloc(): TKAutoCompleteDataSourceSettings; // inherited from NSObject

	static new(): TKAutoCompleteDataSourceSettings; // inherited from NSObject

	readonly autocomplete: TKAutoCompleteDataSourceAutoCompleteSettings;

	readonly collectionView: TKAutoCompleteDataSourceCollectionViewSettings;

	readonly tableView: TKAutoCompleteDataSourceTableViewSettings;
}

declare class TKAutoCompleteDataSourceSortDescriptor extends NSObject {

	static alloc(): TKAutoCompleteDataSourceSortDescriptor; // inherited from NSObject

	static new(): TKAutoCompleteDataSourceSortDescriptor; // inherited from NSObject

	ascending: boolean;

	readonly comparator: (p1: any, p2: any) => NSComparisonResult;

	readonly descriptor: NSSortDescriptor;

	propertyName: string;

	constructor(o: { comparator: (p1: any, p2: any) => NSComparisonResult; });

	constructor(o: { property: string; ascending: boolean; });

	initWithComparator(comparator: (p1: any, p2: any) => NSComparisonResult): this;

	initWithPropertyAscending(propertyName: string, ascending: boolean): this;
}

declare class TKAutoCompleteDataSourceTableViewSettings extends NSObject {

	static alloc(): TKAutoCompleteDataSourceTableViewSettings; // inherited from NSObject

	static new(): TKAutoCompleteDataSourceTableViewSettings; // inherited from NSObject

	createCell(createCellForItem: (p1: UITableView, p2: NSIndexPath, p3: any) => UITableViewCell): void;

	ds_cellForItemAtIndexPathInGroupInTableView(item: any, indexPath: NSIndexPath, group: TKAutoCompleteDataSourceGroup, tableView: UITableView): UITableViewCell;

	ds_initCellWithItemAtIndexPathInGroupFromDataSourceInTableView(cell: UITableViewCell, item: any, indexPath: NSIndexPath, group: TKAutoCompleteDataSourceGroup, dataSource: TKDataSourceExtended, tableView: UITableView): void;

	initCell(initCellWithItem: (p1: UITableView, p2: NSIndexPath, p3: UITableViewCell, p4: any) => void): void;
}

interface TKAutoCompleteDelegate extends NSObjectProtocol {

	autoCompleteDidAddToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidAutoComplete?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidDeselectToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidRemoveToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidSelectToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidStartEditing?(autocomplete: TKAutoCompleteTextView): void;

	autoCompleteShouldAddToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): boolean;

	autoCompleteShouldRemoveToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): boolean;

	autoCompleteSuggestionListUpdated?(autocomplete: TKAutoCompleteTextView, suggestionList: NSArray<TKAutoCompleteToken>): void;

	autoCompleteViewForToken?(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): TKAutoCompleteTokenView;

	autoCompleteWillShowSuggestionList?(autocomplete: TKAutoCompleteTextView, suggestionList: NSArray<TKAutoCompleteToken>): void;
}
declare var TKAutoCompleteDelegate: {

	prototype: TKAutoCompleteDelegate;
};

declare const enum TKAutoCompleteDisplayMode {

	Plain = 0,

	Tokens = 1
}

declare const enum TKAutoCompleteLayoutMode {

	Horizontal = 0,

	Wrap = 1
}

declare const enum TKAutoCompleteSuggestMode {

	Suggest = 0,

	Append = 1,

	SuggestAppend = 2
}

interface TKAutoCompleteSuggestViewDelegate extends NSObjectProtocol {

	selectedItem: TKAutoCompleteToken;

	hide(): void;

	populateWithItems(items: NSArray<TKAutoCompleteToken>): void;

	reloadSuggestions(): void;

	shouldAlwaysHideSuggestionView(): boolean;

	show(): void;
}
declare var TKAutoCompleteSuggestViewDelegate: {

	prototype: TKAutoCompleteSuggestViewDelegate;
};

declare class TKAutoCompleteSuggestionCell extends UICollectionViewCell {

	static alloc(): TKAutoCompleteSuggestionCell; // inherited from NSObject

	static appearance(): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteSuggestionCell; // inherited from UIAppearance

	static new(): TKAutoCompleteSuggestionCell; // inherited from NSObject

	contentInsets: UIEdgeInsets;

	readonly imageView: UIImageView;

	readonly textLabel: UILabel;
}

declare class TKAutoCompleteTextView extends TKView {

	static alloc(): TKAutoCompleteTextView; // inherited from NSObject

	static appearance(): TKAutoCompleteTextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteTextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTextView; // inherited from UIAppearance

	static new(): TKAutoCompleteTextView; // inherited from NSObject

	allowCustomTokens: boolean;

	allowTokenHighlighting: boolean;

	autocompleteInset: number;

	readonly closeButton: TKAutoCompleteClearButton;

	closeButtonInsets: UIEdgeInsets;

	readonly contentView: TKView;

	cover: TKAutoCompleteCoverView;

	readonly currentWrapHeight: number;

	dataSource: TKAutoCompleteDataSource;

	delegate: TKAutoCompleteDelegate;

	displayMode: TKAutoCompleteDisplayMode;

	readonly imageView: UIImageView;

	imageViewInsets: UIEdgeInsets;

	layoutMode: TKAutoCompleteLayoutMode;

	maximumTokensCount: number;

	maximumWrapHeight: number;

	minimumCharactersToSearch: number;

	readonly noResultsLabel: UILabel;

	readOnly: boolean;

	showAllItemsInitially: boolean;

	showCloseButton: boolean;

	suggestMode: TKAutoCompleteSuggestMode;

	suggestionView: UIView;

	suggestionViewHeight: number;

	suggestionViewOutOfFrame: boolean;

	readonly textField: UITextField;

	readonly titleLabel: UILabel;

	tokenInset: number;

	tokeninzingSymbols: NSArray<string>;

	addToken(token: TKAutoCompleteToken): void;

	completeSuggestionViewPopulation(suggestions: NSArray<any>): void;

	insertTokenAtIndex(token: TKAutoCompleteToken, index: number): void;

	removeAllTokens(): void;

	removeToken(token: TKAutoCompleteToken): void;

	removeTokenAtIndex(index: number): void;

	resetAutocomplete(): void;

	resetAutocompleteState(): void;

	textFieldWasUpdated(sender: UITextField): void;

	tokenAtIndex(index: number): TKAutoCompleteToken;

	tokens(): NSArray<any>;

	updateCloseButtonVisibility(): void;
}

declare class TKAutoCompleteToken extends NSObject {

	static alloc(): TKAutoCompleteToken; // inherited from NSObject

	static new(): TKAutoCompleteToken; // inherited from NSObject

	attributedText: NSAttributedString;

	image: UIImage;

	text: string;

	constructor(o: { text: string; });

	initWithText(text: NSString): this;
}

declare class TKAutoCompleteTokenHolderView extends UIScrollView {

	static alloc(): TKAutoCompleteTokenHolderView; // inherited from NSObject

	static appearance(): TKAutoCompleteTokenHolderView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteTokenHolderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteTokenHolderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTokenHolderView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteTokenHolderView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTokenHolderView; // inherited from UIAppearance

	static new(): TKAutoCompleteTokenHolderView; // inherited from NSObject
}

declare class TKAutoCompleteTokenRemoveButton extends UIButton {

	static alloc(): TKAutoCompleteTokenRemoveButton; // inherited from NSObject

	static appearance(): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTokenRemoveButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): TKAutoCompleteTokenRemoveButton; // inherited from UIButton

	static new(): TKAutoCompleteTokenRemoveButton; // inherited from NSObject
}

declare class TKAutoCompleteTokenView extends TKView implements UIKeyInput {

	static alloc(): TKAutoCompleteTokenView; // inherited from NSObject

	static appearance(): TKAutoCompleteTokenView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKAutoCompleteTokenView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKAutoCompleteTokenView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTokenView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKAutoCompleteTokenView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKAutoCompleteTokenView; // inherited from UIAppearance

	static new(): TKAutoCompleteTokenView; // inherited from NSObject

	highlightedView: UIView;

	readonly imageView: UIImageView;

	isHighlighted: boolean;

	owner: TKAutoCompleteTextView;

	removeButton: UIButton;

	readonly textLabel: UILabel;

	token: TKAutoCompleteToken;

	tokenInset: number;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	readonly hasText: boolean; // inherited from UIKeyInput

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	smartDashesType: UITextSmartDashesType; // inherited from UITextInputTraits

	smartInsertDeleteType: UITextSmartInsertDeleteType; // inherited from UITextInputTraits

	smartQuotesType: UITextSmartQuotesType; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContentType: string; // inherited from UITextInputTraits

	readonly  // inherited from NSObjectProtocol

	constructor(o: { token: TKAutoCompleteToken; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteBackward(): void;

	initWithToken(token: TKAutoCompleteToken): this;

	insertText(text: string): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataSourceExtended extends NSObject implements NSURLConnectionDataDelegate, NSURLConnectionDelegate, TKAutoCompleteDataSource, UICollectionViewDataSource, UICollectionViewDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): TKDataSourceExtended; // inherited from NSObject

	static new(): TKDataSourceExtended; // inherited from NSObject

	allowItemsReorder: boolean;

	currentItem: any;

	displayKey: string;

	currentCompletionMode;

	readonly filterDescriptors: NSArray<TKAutoCompleteDataSourceFilterDescriptor>;

	formatter: NSFormatter;

	readonly groupDescriptors: NSArray<TKAutoCompleteDataSourceGroupDescriptor>;

	groupItemSourceKey: string;

	itemSource: any;

	readonly items: NSArray<any>;

	mapClass: typeof NSObject;

	mapCollectionsRecursively: boolean;

	propertyMap: NSDictionary<any, any>;

	readonly settings: TKAutoCompleteDataSourceSettings;

	readonly sortDescriptors: NSArray<TKAutoCompleteDataSourceSortDescriptor>;

	valueKey: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { array: NSArray<any>; });

	constructor(o: { array: NSArray<any>; displayKey: string; });

	constructor(o: { array: NSArray<any>; displayKey: string; valueKey: string; });

	constructor(o: { dataFromJSONResource: string; ofType: string; rootItemKeyPath: string; });

	constructor(o: { dataFromURL: string; dataFormat: TKAutoCompleteDataSourceDataFormat; rootItemKeyPath: string; completion: (p1: NSError) => void; });

	constructor(o: { itemSource: any; });

	constructor(o: { JSONString: string; });

	addFilterDescriptor(filterDescriptor: TKAutoCompleteDataSourceFilterDescriptor): void;

	addGroupDescriptor(groupDescriptor: TKAutoCompleteDataSourceGroupDescriptor): void;

	addSortDescriptor(sortDescriptor: TKAutoCompleteDataSourceSortDescriptor): void;

	autoCompleteCompletionForPrefix(autocomplete: TKAutoCompleteTextView, prefix: string): NSArray<TKAutoCompleteToken>;

	autoCompleteCompletionsForString(autocomplete: TKAutoCompleteTextView, input: string): void;

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	connectionCanAuthenticateAgainstProtectionSpace(connection: NSURLConnection, protectionSpace: NSURLProtectionSpace): boolean;

	connectionDidCancelAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidFailWithError(connection: NSURLConnection, error: NSError): void;

	connectionDidFinishLoading(connection: NSURLConnection): void;

	connectionDidReceiveAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionDidReceiveData(connection: NSURLConnection, data: NSData): void;

	connectionDidReceiveResponse(connection: NSURLConnection, response: NSURLResponse): void;

	connectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite(connection: NSURLConnection, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;

	connectionNeedNewBodyStream(connection: NSURLConnection, request: NSURLRequest): NSInputStream;

	connectionShouldUseCredentialStorage(connection: NSURLConnection): boolean;

	connectionWillCacheResponse(connection: NSURLConnection, cachedResponse: NSCachedURLResponse): NSCachedURLResponse;

	connectionWillSendRequestForAuthenticationChallenge(connection: NSURLConnection, challenge: NSURLAuthenticationChallenge): void;

	connectionWillSendRequestRedirectResponse(connection: NSURLConnection, request: NSURLRequest, response: NSURLResponse): NSURLRequest;

	enumerate(enumeratorBlock: (p1: any) => void): void;

	filter(filterBlock: (p1: any) => boolean): void;

	filterWithQuery(filterQuery: string): void;

	formatText(formatTextBlock: (p1: any, p2: TKAutoCompleteDataSourceGroup) => string): void;

	group(keyForItem: (p1: any) => any): void;

	groupComparator(keyForItem: (p1: any) => any, comparatorBlock: (p1: any, p2: any) => NSComparisonResult): void;

	groupWithKey(propertyName: string): void;

	groupWithKeyComparator(propertyName: string, comparatorBlock: (p1: any, p2: any) => NSComparisonResult): void;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	initWithArray(items: NSArray<any>): this;

	initWithArrayDisplayKey(items: NSArray<any>, displayKey: string): this;

	initWithArrayDisplayKeyValueKey(items: NSArray<any>, displayKey: string, valueKey: string): this;

	initWithDataFromJSONResourceOfTypeRootItemKeyPath(name: string, type: string, rootItemKeyPath: string): this;

	initWithDataFromURLDataFormatRootItemKeyPathCompletion(url: string, dataFormat: TKAutoCompleteDataSourceDataFormat, rootItemKeyPath: string, completion: (p1: NSError) => void): this;

	initWithItemSource(itemSource: any): this;

	initWithJSONString(str: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadDataFromJSONResourceOfTypeRootItemKeyPath(name: string, type: string, rootItemKeyPath: string): void;

	loadDataFromJSONStringRootItemKeyPath(string: string, rootItemKeyPath: string): void;

	loadDataFromURLDataFormatRootItemKeyPathCompletion(url: string, dataFormat: TKAutoCompleteDataSourceDataFormat, rootItemKeyPath: string, completion: (p1: NSError) => void): void;

	map(mapBlock: (p1: any) => any): void;

	moveItemAtIndexToIndex(fromIndex: number, toIndex: number): void;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reduceWith(initialValue: any, reduceBlock: (p1: any, p2: any) => any): any;

	reloadData(): void;

	removeAllFilterDescriptors(): void;

	removeAllGroupDescriptors(): void;

	removeAllSortDescriptors(): void;

	removeFilterDescriptor(filterDescriptor: TKAutoCompleteDataSourceFilterDescriptor): void;

	removeGroupDescriptor(groupDescriptor: TKAutoCompleteDataSourceGroupDescriptor): void;

	removeSortDescriptor(sortDescriptor: TKAutoCompleteDataSourceSortDescriptor): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	sort(comparatorBlock: (p1: any, p2: any) => NSComparisonResult): void;

	sortWithKeyAscending(propertyName: string, ascending: boolean): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	textFromItemInGroup(item: any, group: TKAutoCompleteDataSourceGroup): string;

	valueForItemInGroup(item: any, group: TKAutoCompleteDataSourceGroup): any;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TKModifiedTextField extends UITextField {

	static alloc(): TKModifiedTextField; // inherited from NSObject

	static appearance(): TKModifiedTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKModifiedTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKModifiedTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKModifiedTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKModifiedTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKModifiedTextField; // inherited from UIAppearance

	static new(): TKModifiedTextField; // inherited from NSObject
}

declare class TKSuggestionListView extends UICollectionView implements TKAutoCompleteSuggestViewDelegate, UICollectionViewDataSource, UICollectionViewDelegate {

	static alloc(): TKSuggestionListView; // inherited from NSObject

	static appearance(): TKSuggestionListView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSuggestionListView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSuggestionListView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSuggestionListView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSuggestionListView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSuggestionListView; // inherited from UIAppearance

	static new(): TKSuggestionListView; // inherited from NSObject

	items: NSArray<TKAutoCompleteToken>;

	owner: TKAutoCompleteTextView;

	readonly progressBar: UIProgressView;

	selectedIndexPath: NSIndexPath;

	selectedItem: TKAutoCompleteToken;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { autoComplete: TKAutoCompleteTextView; });

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	hide(): void;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	initWithAutoComplete(autocomplete: TKAutoCompleteTextView): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	populateWithItems(items: NSArray<TKAutoCompleteToken>): void;

	reloadSuggestions(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	shouldAlwaysHideSuggestionView(): boolean;

	show(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare var TNSAutoCompleteVersionNumber: number;

declare var TNSAutoCompleteVersionString: interop.Reference<number>;
