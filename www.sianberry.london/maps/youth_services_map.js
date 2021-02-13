//This file adds elements with IDs which look like 'layer-control-layerX' for each X between 1 and the number of defined layers - beware of clashing IDs.
(function() {
	var styleDescriptions = [
		//styleDescriptions is where you describe the available styles. The first parameter for the styleDescription function
		//is the name of the style, the second parameter is an object containing the fill, stroke and radius options you want.
		//The options for fill and stroke are fillOptions and strokeOptions defined here: http://openlayers.org/en/v3.0.0-beta.1/apidoc/ol.style.html .
		//The radius, if specified, will be used for point data.
		//If you specify an unrecognised style for a layer then a default will be used. You can override the default by adding a style called 'default'.
		//You may also specify a 'rules' property, which should be an array of rule objects which look like {predicate: function(feature){return true or false}, modifier: {style/fill/radius as above}}, such that the modifier specified in the first rule whose predicate matches a feature will be applied to the baseStyle, with no modifier being used for features which don't match any rule's predicate, and for the indicator in the control panel. For example, a rule object of {predicate: function(feature){return feature.get('Trust') === 'Kent';}, modifier: {fill: {color: 'red'}}} will fill all features whose 'Trust' property is 'Kent' with red. The feature passed in will be an ol.Feature as described here: http://openlayers.org/en/v3.0.0-beta.1/apidoc/ol.Feature.html
			styleDescription('red', {
				fill: {
					color: 'rgba(178, 34, 34, 0.3)'
				},
				stroke: {
					color: 'rgba(178, 34, 34, 0.7)'
				},
				radius: 8
			}),
			styleDescription('blue', {
				fill: {
					color: 'rgba(72, 61, 139, 0.3)'
				},
				stroke: {
					color: 'rgba(72, 61, 139, 0.7)'
				},
				radius: 8
			}),
			styleDescription('purple', {
				fill: {
					color: 'rgba(139, 0, 139, 0.3)'
				},
				stroke: {
					color: 'rgba(139, 0, 139, 0.7)'
				},
				radius: 8
			}),
			styleDescription('purple2', {
				fill: {
					color: 'rgba(139, 0, 139, 0.3)'
				},
				stroke: {
					color: 'rgba(46, 139, 87, 0.7)'
				},
				radius: 8
			}),

			styleDescription('purple3', {
				fill: {
					color: 'rgba(75, 0, 130, 0.3)'
				},
				stroke: {
					color: 'rgba(75, 0, 130, 0.7)',
					width: 2
				},
				radius: 8
			}),
			styleDescription('pink', {
				fill: {
					color: 'rgba(199, 21, 133, 0.3)'
				},
				stroke: {
					color: 'rgba(199, 21, 133, 0.7)'
				},
				radius: 8
			}),
			styleDescription('ltgreen', {
				fill: {
					color: 'rgba(50, 205, 50, 0.3)'
				},
				stroke: {
					color: 'rgba(50, 205, 50, 0.7)'
				},
				radius: 8
			}),
			// EXAMPLE to be copied for any conditional styles needed - example  only
			styleDescription('closed', {
				fill: {
					color: 'rgba(127, 172, 88, 0.7)'
				},
				stroke: {
					color: 'rgba(127, 172, 88, 0.9)'
				},
				radius: 8,
				rules: [{
					predicate: function(feature){ return feature.get('Cut_since_') === 'Y';},
					modifier: {
						fill: { color: 'rgba(237, 28, 44, 0.7)' },
						stroke: { color: 'rgba(237, 28, 44, 0.9)' },
						radius: 8
					}
				}]
			}),
			styleDescription('ltgreen2', {
				fill: {
					color: 'rgba(124, 252, 0, 0.3)'
				},
				stroke: {
					color: 'rgba(160, 82, 45, 0.7)'
				},
				radius: 8
			}),
			styleDescription('teal', {
				fill: {
					color: 'rgba(0, 128, 128, 0.4)'
				},
				stroke: {
					color: 'rgba(0, 128, 128, 0.7)'
				},
				radius: 8
			}),
			styleDescription('green', {
				fill: {
					color: 'rgba(46, 139, 87, 0.3)'
				},
				stroke: {
					color: 'rgba(46, 139, 87, 0.7)'
				},
				radius: 8
			}),
			styleDescription('green2', {
				fill: {
					color: 'rgba(0, 100, 0, 0.3)'
				},
				stroke: {
					color: 'rgba(178, 34, 34, 0.7)'
				},
				radius: 8
			}),
			styleDescription('green3', {
				fill: {
					color: 'rgba(0, 100, 0, 0.3)'
				},
				stroke: {
					color: 'rgba(0, 0, 0, 0.7)'
				},
				radius: 8
			}),
			styleDescription('orange', {
				fill: {
					color: 'rgba(210, 105, 30, 0.3)'
				},
				stroke: {
					color: 'rgba(210, 105, 30, 0.7)'
				},
				radius: 8
			}),

			styleDescription('orange2', {
				fill: {
					color: 'rgba(210, 105, 30, 0.3)'
				},
				stroke: {
					color: 'rgba(112, 128, 144, 0.7)'
				},
				radius: 8
			}),


			styleDescription( 'dkorange', {
				fill: {
					color: 'rgba(160, 82, 45, 0.3)'
				},
				stroke: {
					color: 'rgba(160, 82, 45, 0.7)'
				},
				radius: 8
			}),

			styleDescription( 'grey', {
				fill: {
					color: 'rgba(112, 128, 144, 0.3)'
				},
				stroke: {
					color: 'rgba(112, 128, 144, 0.7)'
				},
				radius: 8
			}),

			styleDescription( 'navy2', {
				fill: {
					color: 'rgba(25, 25, 112, 0.3)'
				},
				stroke: {
					color: 'rgba(160, 34, 34, 0.7)'
				},
				radius: 8
			}),

			styleDescription( 'navy', {
				fill: {
					color: 'rgba(25, 25, 112, 0.3)'
				},
				stroke: {
					color: 'rgba(25, 25, 112, 0.7)'
				},
				radius: 8
			}),


			styleDescription('roads', {
				fill: {
					color: 'rgba(205, 92, 92, 0.7)'
				},
				stroke: {
					color: 'rgba(25, 25, 25, 0.7)',
					width: 2
				},
				radius: 7
			}),
			
			// ROADS WIDTH STYLES - EXAMPLE OF CONDITIONAL STYLE BASED ON DATA VALUES 
			styleDescription('closures', {
				fill: {
					color: 'rgba(112, 128, 144, 0.2)'
				},
				stroke: {
					color: 'rgba(25, 25, 25, 0.4)',
					width: 1
				},
				radius: 7,
				rules: [{
						//this predicate matches features whose AADT_2014 is missing or not a number
						predicate: function(feature){ return floatOrDefault(feature.get('Net_loss'), null) === null;},
						modifier: {
							fill: { color: 'rgba(200, 200, 200, 0.2)'}
						}
					}, {
						//this predicate matches features whose AADT_2014 is present (given that the above
						//predicate wasn't matched) but less than 2000
						predicate: function(feature){ return floatOrDefault(feature.get('Net_loss'), 0) < -2;},
						modifier: {
							fill: { color: 'rgba(237, 106, 66, 0.2)'}
						}
					}, {
						predicate: function(feature){ return floatOrDefault(feature.get('Net_loss'), 0) < 0;},
						modifier: {
							fill: {color: 'rgba(247, 174, 79, 0.2)'}
						}
					}, {
						predicate: function(feature){ return floatOrDefault(feature.get('Net_loss'), 0) <= 100;},
						modifier: {
							fill: {color: 'rgba(127, 172, 88, 0.2)'}
						}
					}]
			})

		],
		//layerDescriptions is where you describe the available layers.
		//The first parameter for the layerDescription function is the name of the layer
		//The second parameter is the name of the GeoJSON file in the data/ directory describing the layer
		//The third parameter is the name of the style to use for the layer
		//The fourth parameter is whether the layer should be hidden on page load
		//The fifth parameter is the ID of an element defining the content to use for the info panel's heading (or null)
		//The sixth parameter is the ID of an element defining the content to use for the info panel's footer (or null)
		//The seventh parameter is an array of property names which should not contribute to the info panel
		//The eighth parameter is an object of original-label/display-name property name/values, to rename properties for the info panel
		layerDescriptions = [

			layerDescription('Youth centres', 'youthcentres_16Mar.geojson', 'closed', false, 'centre-header', 'centre-footer', []),
			layerDescription('Borough youth centre data', 'boroughs_youth_centres_16Mar.geojson', 'closures', false, 'borough-header', 'borough-footer', [])
		//	layerDescription('Upcoming Camden Council sites', 'new_sites.geojson', 'teal', false, 'NEW-header', 'NEW-footer', ['LOCATION', 'LAT', 'LONG', 'Name', 'timestamp', 'begin', 'end', 'altitudeMode', 'tessellate', 'extrude', 'visibility', 'drawOrder','icon'])
		],


		//the ID of the element to use for the information panel
		infoElementID = 'info',
		//the HTML to put into the information panel when no feature is selected
		infoElementEmptyHtml = '<div class="empty-info">Click on a borough or youth centre to see more info.</div>',
		//the HTML to put into the information panel when a feature is selected for which no information is available
		infoElementNoInfoHtml = '<div class="empty-info">No information is available</div>',
		//the class to put on the table generated to display a feature's information in the information panel
		infoTableClass = 'feature-info',
		//the ID of the element to use for the layer controls
		layerControlContainerID = 'layers',
		//the coordinate of the initial centre of the map, in the projection specified below
		mapCenter = [-10285.007648540818991, 6711228.050373420119286 ],
		//the ID of the element to insert the map into
		mapElementID = 'map',
		//which projection to use for the map
		projection = 'EPSG:3857',
		//the zoom level to initialse the map with. The initial implementation used 9 for this value.
		initialZoom = 11,
		// turns off wheel zoom
		zoomWheelEnabled = false,
		//options for the base map source, as documented at http://openlayers.org/en/v3.1.1/apidoc/ol.layer.Tile.html. 
		baseMapSource = {
			opacity: 0.4,
			saturation: 0.1, // this doesn't seem to work to adjust saturation, but opacity does 
			source: new ol.source.OSM()
		},


		//***end of initial customisation*** LEAVE ALONE NEXT SECTION 



		i,
		infoElement,
		layerControlContainer,
		layerDescriptionLookup,
		layerIdentifierCounter,
		layers = [],
		map,
		styles;
		
	function styleDescription(name, options) {
		var i,
			rule;
		
		//avoid null references
		styles = styles || {};
		options = options || {};
		options.fill = options.fill || {};
		options.stroke = options.stroke || {};
		
		//set some defaults
		options.fill.color = options.fill.color || '#ffbb55';
		options.stroke.color = options.stroke.color || '#ff6600';
		options.stroke.width = options.stroke.width || 1;
		options.radius = options.radius || 5;
		options.rules = options.rules || []
		
		//generate a style for each rule by applying its modifier to the base style, and store it on the rule
		for(i = 0; i < options.rules.length; i += 1){
			rule = options.rules[i];
			rule.style = getStyle(options, rule.modifier);
		}
		
		//store the style
		styles[name] = {
			baseStyle: getStyle(options),
			indicator: {
				fillColor: options.fill.color,
				strokeColor: options.stroke.color
			},
			rules: options.rules
		};
	}
	
	//returns a style obtained by applying the given modifier (if specified) to the base. Both
	//objects are expected to be fill/stroke/radius option objects.
	function getStyle(base, modifier){
		var fillOptions,
			radius,
			strokeOptions;
			
		if(modifier){
			//avoid null references
			modifier.fill = modifier.fill || {};
			modifier.stroke = modifier.stroke || {};
			
			fillOptions	= {
				color: modifier.fill.color || base.fill.color,
				opacity: modifier.fill.opacity || base.fill.opacity
			};
			radius = modifier.radius || base.radius;
			strokeOptions = {
				color: modifier.stroke.color || base.stroke.color,
				opacity: modifier.stroke.opacity || base.stroke.opacity,
				width: modifier.stroke.width || base.stroke.width
			};
		} else {
			fillOptions = base.fill;
			radius = base.radius;
			strokeOptions = base.stroke;
		}
		
		return new ol.style.Style({
			fill: new ol.style.Fill(fillOptions),
			image: new ol.style.Circle({
				radius: radius,
				fill: new ol.style.Fill(fillOptions),
				stroke: new ol.style.Stroke(strokeOptions)
			}),
			stroke: new ol.style.Stroke(strokeOptions)
		});
	}
		
	//function to help build the layerDescriptions
	function layerDescription(name, filename, style, hiddenOnLoad, infoHeadingElementId, infoFooterElementId, propertyNameBlacklist, propertyNameMap){
		var thisDescription;
		//get the next identifier
		layerIdentifierCounter = (layerIdentifierCounter || 0) + 1;
		//create this layer description
		thisDescription = {
			filename: filename,
			hiddenOnLoad: hiddenOnLoad,
			identifier: 'layer' + layerIdentifierCounter,
			infoFooterElementId: infoFooterElementId,
			infoHeadingElementId: infoHeadingElementId,
			name: name,
			propertyNameBlacklist: propertyNameBlacklist || [],
			propertyNameMap: propertyNameMap || {},
			style: style
		};
		//ensure the lookup is initialised
		layerDescriptionLookup = layerDescriptionLookup || {};
		//add this description to the lookup
		layerDescriptionLookup[thisDescription.identifier] = thisDescription;
		//return this description
		return thisDescription;
	}
	
	//returns the number parsed as a float, or the default value if the input can't be parsed. 
	function floatOrDefault(input, def){
		var parsed = parseFloat(input);
		if(isNaN(parsed)) return def;
		return parsed;
	}


	
	//returns HTML representing the provided feature, which belongs to the provided layer
	function getInfoContent(feature, layerIdentifier){
		var hasInfo,
			html = '',
			layerDescription = layerDescriptionLookup[layerIdentifier],
			mappedPropertyName,
			property,
			propertyName;


//		console.info(feature.getProperties());
		
		//if the layer has heading HTML then add it first
		if(layerDescription.infoHeadingHtml){
			html += layerDescription.infoHeadingHtml;
		}

// LEAVE ALONE ABOVE THIS LINE - WORKING JS
	
// CUSTOMISATION FOR DATA WITH CONSISTENT FIELDS BETWEEN LAYERS
// 1. Define properties

		if(feature.hasOwnProperty('type')) {
				type = feature['type'];
		}

		if(feature.hasOwnProperty('Borough')) {
				borough = feature['Borough'];
		}

		if(feature.hasOwnProperty('Funded_201')) {
				funded_201 = feature['Funded_201'];
		}

		if(feature.hasOwnProperty('Cut_since_')) {
				cut_since_ = feature['Cut_since_'];
		}

		if(feature.hasOwnProperty('Name')) {
				name = feature['Name'];
		}

		if(feature.hasOwnProperty('Address')) {
				address = feature['Address'];
		}

		if(feature.hasOwnProperty('Postcode')) {
				postcode = feature['Postcode'];
		}

		if(feature.hasOwnProperty('VCS_suppor')) {
				vcs_suppor = feature['VCS_suppor'];
		}

		if(feature.hasOwnProperty('Notes')) {
				note = feature['Notes'];
		}

		if(feature.hasOwnProperty('Link')) {
				link = feature['Link'];
		}

		if(feature.hasOwnProperty('Year1')) {
				year1 = feature['Year1'];
		}

		if(feature.hasOwnProperty('Year2')) {
				year2 = feature['Year2'];
		}

		if(feature.hasOwnProperty('Youth_centres_Yr1')) {
				youth_centres_yr1 = feature['Youth_centres_Yr1'];
		}

		if(feature.hasOwnProperty('Youth_centres_Yr2')) {
				youth_centres_yr2 = feature['Youth_centres_Yr2'];
		}

		if(feature.hasOwnProperty('Net_loss')) {
				net_loss = feature['Net_loss'];
		}


// 2. Insert html using properties

// IF statement to enclose info window contents for CIP schemes 
if (type=='centre'){

		html +=		'<div id="info_top">';
		html +=				'<div id="name">';
		html +=					'<h1>' + name + ' </h1>';
		html +=					'<h2>' + borough + '</h2>';
		html +=					'<p>' + address + ' <br />' + postcode + '</p>';
		html +=				'</div>';
		html +=		'</div>';


		html +=		'<div id="problems">';
		html +=			'<div id="problems_l">';
		html +=				'<p><strong>Funded 2017/18?</strong> ' + funded_201 + '</p>';
		html +=				'<p><strong>Cut since 2011:</strong> ' + cut_since_ + '</p>';
		html +=				'<p><strong>Voluntary sector but supported by council:</strong> ' + vcs_suppor + '</p>';
		html +=				'<p>Notes:' + note + '</p>';
		html +=				'<p><a href="' + link + '">Link to more info (if available)</a>';
		html +=			'</div>';

		html +=		'</div>';

// END of IF statement for CIP schemes

// START of IF statement FOR ACCOM STRATEGY schemes

} else if (type=='borough'){ 

		html +=		'<div id="info_top">';
		html +=				'<div id="name">';
		html +=					'<h1>' + name + '</h1>';
		html +=					'<h2>Net loss/gain of youth centres between the dates shown: ' + net_loss + '</h2> ';
		html +=				'</div>';
		html +=		'</div>';


		html +=		'<div id="problems">';
		html +=			'<div id="problems_l">';
		html +=				'<p><strong>' + year1 + ':</strong> ' + youth_centres_yr1 + '</p>';
		html +=				'<p><strong>' + year2 + ':</strong> ' + youth_centres_yr2 + '</p><p>(includes major council-supported projects)</p>';
		html +=			'</div>';

		html +=		'</div>';

// END of IF statement for ACCOM STRATEGY schemes

// ELSE IF statement for upcoming schemes 

} else { 
		html += '<p>INFO TO FOLLOW</p>';
}


// LEAVE ALONE BELOW THIS LINE - WORKING JS 

		 for(propertyName in feature){
			//if the property belongs to the feature, and it isn't in the layerDescription's blacklist of property names, then consider it
			if(feature.hasOwnProperty(propertyName) && layerDescription.propertyNameBlacklist.indexOf(propertyName) === -1){
				property = feature[propertyName];

				//don't support arrays or objects for now, and don't add a row for an empty property
				if(typeof(property) !== 'Array' && typeof(property) !== 'Object' && property !== ''){
					mappedPropertyName = layerDescription.propertyNameMap[propertyName] || propertyName;
	//				html += '<tr><th>' + mappedPropertyName + '</th><td>' + property + '</td></tr>';
//					html += '<p>' + property + '</p>';
					hasInfo = true;
				}
			}
		 }
		//if there was no information we can display then use the 'no info' content instead
		 if(!hasInfo){
		 	html += '<tr><td colspan="2">' + infoElementNoInfoHtml + '</td></tr>';
		 }
		
//		 html += '</table>';
		
		//if the layer has footer HTML then add it before returning
		if(layerDescription.infoFooterHtml){
			html += layerDescription.infoFooterHtml;
		}
		
		return html;
	}
	
	//asynchronously reads the file at the specified url and calls the provided resultsCallback function with the contents
	function readTextFile(url, resultsCallback){
		var rawFile = new XMLHttpRequest();
		
		rawFile.open("GET", url, true);
		rawFile.onreadystatechange = function(){
			if(rawFile.readyState === 4){
				if(rawFile.status === 200 || rawFile.status == 0){
					var allText = rawFile.responseText;
					resultsCallback(allText);
				}
				else {
					throw 'error loading file: ' + url;
				}
			}
		}
		rawFile.send(null);
	}
	
	//turns the provided element into a spinner, by periodically replacing its contents with a spinner character.
	//adds a stopSpinner() function to the element which stops the content replacement.
	function makeSpinner(element){
		var chars = '|/-\\',
			i = 0,
			interval;
			
		element.style.cursor = 'help';
		element.style.textAlign = 'center';
		element.title = 'Loading layer...';
		applySpinnerCheckboxStyle(element);
			
		interval = setInterval(function(){
			i = i === chars.length - 1 ? 0 : i + 1;
			element.innerHTML = chars[i];
		}, 200);
		
		element.stopSpinner = function(){
			clearInterval(interval);
		};
	}
	
	//applies the styles common to spinners and checkboxes, which keep them aligned. Removes element.style.display 'none' if present.
	function applySpinnerCheckboxStyle(element){
		element.style.display = 'inline-block';
		element.style.fontSize = '10px';
		element.style.margin = '3px';
		element.style.width = '11px';
		element.style.verticalAlign = 'top';
	}
	
	//creates the layer described by the provided description and adds it to the layers array.
	function initialiseLayer(layerDescription){
		var infoFooterElement,
			infoHeadingElement,
			layer,
			layerControl,
			layerControlCheckbox,
			layerControlCheckboxID = 'layer-control-' + layerDescription.identifier,
			layerControlLabel,
			layerControlSpinner,
			layerStyleIndicator,
			//look up the layer's style - if it can't be found then use the default
			styleDescription = styles[layerDescription.style] || styles['default'],	
			layer = new ol.layer.Vector({
				source: new ol.source.GeoJSON({
					//add a source with no data, we'll load the actual data asynchronously
					object: {
						type: 'FeatureCollection',
						features: []
					} 
				}),
			style: function(feature){
					var i;
					//look for the first rule whose predicate matches the feature
					for(i = 0; i < styleDescription.rules.length; i += 1){
						if(styleDescription.rules[i].predicate(feature)){
							//if this rule's predicate matches, use its style
							return [styleDescription.rules[i].style];
						}
					}
					//no predicates match - use this style's base style
					return [styleDescription.baseStyle];
				},
				identifier: layerDescription.identifier
			});
			
		if(layerDescription.hiddenOnLoad){
			layer.setVisible(false);
		}
		
		//supplement the layerDescription with the content of its info heading element, if it has one
		if(layerDescription.infoHeadingElementId){
			infoHeadingElement = document.getElementById(layerDescription.infoHeadingElementId);
			if(infoHeadingElement){
				layerDescription.infoHeadingHtml = infoHeadingElement.outerHTML;
				//now that we've got the HTML from the heading element, we should remove it from the page
				infoHeadingElement.parentNode.removeChild(infoHeadingElement);
			}
		}
		
		//supplement the layerDescription with the content of its info footer element, if it has one
		if(layerDescription.infoFooterElementId){
			infoFooterElement = document.getElementById(layerDescription.infoFooterElementId);
			if(infoFooterElement){
				layerDescription.infoFooterHtml = infoFooterElement.outerHTML;
				//now that we've got the HTML from the footer element, we should remove it from the page
				infoFooterElement.parentNode.removeChild(infoFooterElement);
			}
		}
		
		layers.push(layer);
		
		//create the layer style indicator
		layerStyleIndicator = document.createElement('div');
		layerStyleIndicator.style.display = 'inline-block';
		layerStyleIndicator.style.height = '11px';
		layerStyleIndicator.style.width = '11px';
		layerStyleIndicator.style.textAlign = 'center';
		layerStyleIndicator.style.background = styleDescription.indicator.fillColor;
		layerStyleIndicator.style.border = '1px solid ' + styleDescription.indicator.strokeColor;
		layerStyleIndicator.style.borderRadius = '3px';
		layerStyleIndicator.style.margin = '0';
		layerStyleIndicator.style.position = 'relative';
		layerStyleIndicator.style.top = '3px';
		
		//and the control for displaying the layer, invisible until the data has been loaded
		layerControlCheckbox = document.createElement('input');
		layerControlCheckbox.type = 'checkbox';
		layerControlCheckbox.checked = layer.getVisible();
		layerControlCheckbox.id = layerControlCheckboxID;
		layerControlCheckbox.onchange = function(){
			layer.setVisible(layerControlCheckbox.checked);
		};
		layerControlCheckbox.style.display = 'none';
		
		//and the spinner, visible until the data has been loaded
		layerControlSpinner = document.createElement('span');
		makeSpinner(layerControlSpinner);
		
		//and its label
		layerControlLabel = document.createElement('label');
		layerControlLabel.htmlFor = layerControlCheckboxID;
		layerControlLabel.innerHTML = layerDescription.name;
		
		//package them together
		layerControl = document.createElement('div');
		layerControl.appendChild(layerStyleIndicator);
		layerControl.appendChild(layerControlCheckbox);
		layerControl.appendChild(layerControlSpinner);
		layerControl.appendChild(layerControlLabel);
		
		//and add them to the container
		layerControlContainer.appendChild(layerControl);
		
		//asynchronously read the source file and replace the layer's source with its data
		readTextFile('data/' + layerDescription.filename, function(data){
						//update the layer's data, display the checkbox, and hide the spinner
			layer.setSource(
				new ol.source.GeoJSON({
					object: data 
				})
			);
			
			//style the checkbox to be visible and have margins and dimensions like the spinners so the controls stay aligned
			applySpinnerCheckboxStyle(layerControlCheckbox);
		
			//stop the spinner and remove it
			layerControlSpinner.stopSpinner();
			layerControlSpinner.parentNode.removeChild(layerControlSpinner);
		});
		
		//if there are now as many layers loaded as there were layerDescriptions, initialise the map
		if(layers.length === layerDescriptions.length){
			//the library adds the layers bottom-up in the order they're specified but we want the first layer to be on top,
			//so reverse the layers list just before initialising the map
			layers.reverse();
			initialiseMap();
		}
	}
	
	//creates the map. Requires the layers variable to be populated before calling.
	function initialiseMap(){
		var map = new ol.Map({
				target: mapElementID,
				interactions: ol.interaction.defaults({mouseWheelZoom:false}),
				layers: [
					new ol.layer.Group({
						layers: [
							new ol.layer.Tile(baseMapSource),
							new ol.layer.Group({
								layers: layers
							})
						]
					})
				],
				view: new ol.View({
					center: mapCenter,
					projection: projection,
					zoom: initialZoom
				})
			});

		//when the map is clicked, we might need to display or hide the info panel's content
		map.on('click', function(e) {
			var displayed = false;
			//loop through each feature underneath the clicked point, looking for one to show information for
			map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
				var properties,
					propertyName,
					propertiesToDisplay = {};


				//if we haven't already displayed information as a result of this click, then do so
				if(!displayed){
					properties = feature.getProperties()
					//'propertiesToDisplay' is going to contain all the properties except 'geometry'
					for(propertyName in properties){
						if(propertyName !== 'geometry' && properties.hasOwnProperty(propertyName)){
							propertiesToDisplay[propertyName] = properties[propertyName];
						}
					}
					infoElement.innerHTML = getInfoContent(propertiesToDisplay, layer.get('identifier'));
					displayed = true;
				}
			});
			
			//if we still haven't displayed any information then the click didn't hit a feature - 
			//reset the info window
			if(!displayed){
				infoElement.innerHTML = infoElementEmptyHtml;
			}
		});
	}
	
	//when the window is ready, we can initialise our references and the map.
	window.onload = function(){
		//grab some handy element references
		infoElement = document.getElementById(infoElementID);
		layerControlContainer = document.getElementById(layerControlContainerID);
		
		//the infoElement starts empty
		infoElement.innerHTML = infoElementEmptyHtml;
		
		//add a default style if one hasn't been set already
		if(!styles.hasOwnProperty('default')){
			styleDescription('default');
		}
		
		//initialise the layers from the layerDescriptions
		for(i = 0; i < layerDescriptions.length; i++){
			initialiseLayer(layerDescriptions[i]);
		}
	}
})();
