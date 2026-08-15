export const INITIAL_REPORTS = [
  {
    id: "REP-2026-8891",
    title: "Severe Pothole on Market St & 4th",
    imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
    locationName: "Market Street & 4th Ave, San Francisco, CA",
    latitude: 37.7858,
    longitude: -122.4065,
    timestamp: "2026-08-15T14:22:00Z",
    formattedDate: "Aug 15, 2026 • 2:22 PM",
    severity: "High Priority",
    severityScore: 92,
    severityColor: "red",
    status: "Assessing",
    statusColor: "yellow",
    upvotes: 47,
    aiAnalysis: {
      damageType: "Deep Asphalt Pothole",
      estimatedDepth: "8.5 cm",
      surfaceArea: "1.4 m²",
      hazardLevel: "Critical - Severe Tire/Axle Risk",
      suggestedFix: "Full Asphalt Patching & Sub-base Stabilization",
      estimatedCost: "$450 - $650"
    },
    exif: {
      camera: "iPhone 15 Pro",
      aperture: "f/1.78",
      shutter: "1/500s",
      iso: 50,
      gpsTimestamp: "14:21:44 GMT"
    }
  },
  {
    id: "REP-2026-8842",
    title: "Transverse Road Crack near Mission District",
    imageUrl: "https://images.unsplash.com/photo-1598436402636-6e2168ec6c73?auto=format&fit=crop&w=800&q=80",
    locationName: "24th St & Mission St, San Francisco, CA",
    latitude: 37.7523,
    longitude: -122.4184,
    timestamp: "2026-08-15T10:15:00Z",
    formattedDate: "Aug 15, 2026 • 10:15 AM",
    severity: "Moderate",
    severityScore: 68,
    severityColor: "amber",
    status: "Reported",
    statusColor: "blue",
    upvotes: 18,
    aiAnalysis: {
      damageType: "Thermal Expansion Crack",
      estimatedDepth: "3.2 cm",
      surfaceArea: "3.8 m²",
      hazardLevel: "Moderate - Moisture Seepage Risk",
      suggestedFix: "Rubberized Crack Sealant Application",
      estimatedCost: "$200 - $350"
    },
    exif: {
      camera: "Google Pixel 8 Pro",
      aperture: "f/1.68",
      shutter: "1/800s",
      iso: 40,
      gpsTimestamp: "10:14:50 GMT"
    }
  },
  {
    id: "REP-2026-8790",
    title: "Sunken Manhole Cover & Alligator Cracking",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    locationName: "Lombard St & Van Ness Ave, San Francisco, CA",
    latitude: 37.8015,
    longitude: -122.4243,
    timestamp: "2026-08-14T18:40:00Z",
    formattedDate: "Aug 14, 2026 • 6:40 PM",
    severity: "High Priority",
    severityScore: 85,
    severityColor: "red",
    status: "In Repair",
    statusColor: "indigo",
    upvotes: 63,
    aiAnalysis: {
      damageType: "Fatigue Alligator Cracking & Utility Sinking",
      estimatedDepth: "6.0 cm",
      surfaceArea: "2.1 m²",
      hazardLevel: "High - Vehicle Suspension Stress",
      suggestedFix: "Frame Re-leveling & Mill/Overlay",
      estimatedCost: "$850 - $1,200"
    },
    exif: {
      camera: "Samsung Galaxy S24 Ultra",
      aperture: "f/1.7",
      shutter: "1/640s",
      iso: 64,
      gpsTimestamp: "18:39:12 GMT"
    }
  },
  {
    id: "REP-2026-8654",
    title: "Edge Ravelling & Shoulder Pothole",
    imageUrl: "https://images.unsplash.com/photo-1578991624414-276ef23a534f?auto=format&fit=crop&w=800&q=80",
    locationName: "Embarcadero & Harrison St, San Francisco, CA",
    latitude: 37.7891,
    longitude: -122.3892,
    timestamp: "2026-08-13T09:30:00Z",
    formattedDate: "Aug 13, 2026 • 9:30 AM",
    severity: "Low",
    severityScore: 35,
    severityColor: "green",
    status: "Fixed",
    statusColor: "emerald",
    upvotes: 12,
    aiAnalysis: {
      damageType: "Shoulder Edge Degradation",
      estimatedDepth: "2.0 cm",
      surfaceArea: "0.8 m²",
      hazardLevel: "Low - Pedestrian/Bike Path Edge",
      suggestedFix: "Cold-mix Spot Repair completed",
      estimatedCost: "$150"
    },
    exif: {
      camera: "iPhone 14",
      aperture: "f/1.5",
      shutter: "1/1000s",
      iso: 50,
      gpsTimestamp: "09:29:40 GMT"
    }
  },
  {
    id: "REP-2026-8521",
    title: "Deep Road Hole near Geary Blvd",
    imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    locationName: "Geary Blvd & 10th Ave, San Francisco, CA",
    latitude: 37.7804,
    longitude: -122.4688,
    timestamp: "2026-08-12T16:10:00Z",
    formattedDate: "Aug 12, 2026 • 4:10 PM",
    severity: "High Priority",
    severityScore: 89,
    severityColor: "red",
    status: "Reported",
    statusColor: "blue",
    upvotes: 34,
    aiAnalysis: {
      damageType: "Base Layer Collapse",
      estimatedDepth: "9.1 cm",
      surfaceArea: "1.8 m²",
      hazardLevel: "High - High Speed Lane Danger",
      suggestedFix: "Emergency Hot-mix Patching",
      estimatedCost: "$600 - $900"
    },
    exif: {
      camera: "Google Pixel 7 Pro",
      aperture: "f/1.85",
      shutter: "1/400s",
      iso: 80,
      gpsTimestamp: "16:09:22 GMT"
    }
  }
];

export const MOCK_PRESET_UPLOADS = [
  {
    name: "Sample 1: Deep Pothole (San Francisco Downtown)",
    url: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
    lat: 37.7749,
    lng: -122.4194,
    locationStr: "1150 Market Street, San Francisco, CA",
    severity: "High Priority",
    severityScore: 94,
    aiDetails: {
      damageType: "Critical Pothole",
      estimatedDepth: "10.2 cm",
      surfaceArea: "1.6 m²",
      hazardLevel: "Immediate Repair Required",
      suggestedFix: "Heavy Duty Asphalt Replacement",
      estimatedCost: "$750"
    }
  },
  {
    name: "Sample 2: Longitudinal Crack (Financial District)",
    url: "https://images.unsplash.com/photo-1598436402636-6e2168ec6c73?auto=format&fit=crop&w=800&q=80",
    lat: 37.7937,
    lng: -122.4008,
    locationStr: "350 California St, San Francisco, CA",
    severity: "Moderate",
    severityScore: 62,
    aiDetails: {
      damageType: "Longitudinal Joint Crack",
      estimatedDepth: "3.5 cm",
      surfaceArea: "4.2 m²",
      hazardLevel: "Moderate Risk",
      suggestedFix: "Hot-pour Crack Sealing",
      estimatedCost: "$320"
    }
  },
  {
    name: "Sample 3: Alligator Cracks (SOMA District)",
    url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    lat: 37.7785,
    lng: -122.3951,
    locationStr: "500 Howard Street, San Francisco, CA",
    severity: "High Priority",
    severityScore: 88,
    aiDetails: {
      damageType: "Structural Asphalt Fatigue",
      estimatedDepth: "7.0 cm",
      surfaceArea: "2.8 m²",
      hazardLevel: "High Risk of Pothole Formation",
      suggestedFix: "Sectional Surface Overlay",
      estimatedCost: "$1,100"
    }
  }
];
