// Mock Dataset for RoadMemory Platform
// Bangalore / Urban Infrastructure Corridor Coordinates for Realistic GIS Map Rendering

export const CITY_SUMMARY = {
  totalAssetsMonitored: "1,284 Segments",
  totalDistanceKm: "412.8 km",
  criticalRiskCount: 14,
  highRiskCount: 38,
  moderateRiskCount: 94,
  lowRiskCount: 1138,
  preventiveActionsRecommended: 126,
  totalAllocatedBudget: 40000000, // ₹4.0 Cr
  utilizedBudget: 24500000,       // ₹2.45 Cr
  avgConditionIndex: 68.4
};

export const ROAD_SEGMENTS = [
  {
    id: "R102-S3",
    name: "Outer Ring Road North (Km 14.2 - 18.5)",
    zone: "North Arterial Corridor",
    coordinates: [
      [12.9820, 77.6350],
      [12.9865, 77.6420],
      [12.9910, 77.6500],
      [12.9960, 77.6580]
    ],
    center: [12.9890, 77.6460],
    riskScore: 89,
    riskTier: "critical",
    currentConditionIndex: 34,
    defectDensity: "24.8 defects/km",
    defectsList: {
      potholes: 26,
      cracksMeters: 480,
      ruttingMeters: 110
    },
    deteriorationRate12m: "+48.2%",
    lastMaintenanceDate: "Nov 2023 (Patch Work)",
    trafficVolume: 62400, // PCD
    axleLoadTn: 11.4,
    populationServed: 210000,
    estimatedRepairCost: 2850000, // ₹28.5L
    priorityRank: 1,
    impactScore: 9.6,
    recommendedAction: "Preventive Resurfacing & Sub-base Drainage Re-engineering",
    xaiBreakdown: {
      currentCondition: 30,
      deteriorationTrend: 26,
      trafficAxleLoad: 20,
      subgradeAge: 11,
      monsoonExposure: 8,
      maintenanceLag: 5
    },
    xaiTakeaway: "Main driver for critical risk: Accelerating micro-crack density combined with high heavy-axle freight loading during monsoon saturation.",
    timelineHistory: [
      {
        year: 2021,
        score: 92,
        condition: "Excellent",
        defectsCount: 3,
        rainfallMm: 980,
        inspectionSource: "PWD Drone LiDAR",
        maintenanceApplied: "Full Surface Bituminous Laying",
        notes: "Post-construction structural baseline verified."
      },
      {
        year: 2022,
        score: 84,
        condition: "Good",
        defectsCount: 8,
        rainfallMm: 1140,
        inspectionSource: "Mobile Camera Sensor Fleet",
        maintenanceApplied: "Routine Edge Sealing",
        notes: "Minor longitudinal shrinkage cracking detected."
      },
      {
        year: 2023,
        score: 68,
        condition: "Fair / Moderate Cracks",
        defectsCount: 22,
        rainfallMm: 1420,
        inspectionSource: "PWD Inspection Team",
        maintenanceApplied: "Emergency Cold Patching (4 Potholes)",
        notes: "Sub-surface moisture accumulation observed near drain culvert."
      },
      {
        year: 2024,
        score: 51,
        condition: "Accelerating Deterioration",
        defectsCount: 41,
        rainfallMm: 1680,
        inspectionSource: "Automated Inspection Van",
        maintenanceApplied: "None (Deferred)",
        notes: "High axle load freight traffic (+18%) causing structural fatigue."
      },
      {
        year: 2025,
        score: 42,
        condition: "Severe Rutting & Cracking",
        defectsCount: 58,
        rainfallMm: 1750,
        inspectionSource: "IoT Telemetry Node",
        maintenanceApplied: "Local Patching",
        notes: "Drainage overflow exacerbating base course erosion."
      },
      {
        year: 2026,
        score: 34,
        condition: "Critical Pothole & Spall Risk",
        defectsCount: 84,
        rainfallMm: 1820,
        inspectionSource: "RoadMemory Predictive Engine",
        maintenanceApplied: "Action Required Immediately",
        notes: "Predicted sub-base structural failure if unaddressed before next monsoon."
      }
    ]
  },
  {
    id: "R108-S1",
    name: "Peenya Industrial Freight Corridor (Km 2.1 - 6.8)",
    zone: "Industrial Freight Bypass",
    coordinates: [
      [13.0250, 77.5180],
      [13.0310, 77.5250],
      [13.0370, 77.5320],
      [13.0420, 77.5410]
    ],
    center: [13.0335, 77.5290],
    riskScore: 84,
    riskTier: "critical",
    currentConditionIndex: 38,
    defectDensity: "21.4 defects/km",
    defectsList: {
      potholes: 21,
      cracksMeters: 520,
      ruttingMeters: 190
    },
    deteriorationRate12m: "+41.5%",
    lastMaintenanceDate: "Mar 2023",
    trafficVolume: 78000,
    axleLoadTn: 14.8,
    populationServed: 165000,
    estimatedRepairCost: 3400000, // ₹34.0L
    priorityRank: 2,
    impactScore: 9.4,
    recommendedAction: "High-Duty SMA Overlay & Base Reinforcement",
    xaiBreakdown: {
      currentCondition: 28,
      deteriorationTrend: 24,
      trafficAxleLoad: 26,
      subgradeAge: 10,
      monsoonExposure: 7,
      maintenanceLag: 5
    },
    xaiTakeaway: "Extreme multi-axle truck load combined with base shear fatigue driving rapid structural degradation.",
    timelineHistory: [
      { year: 2021, score: 88, condition: "Good", defectsCount: 5, rainfallMm: 920, inspectionSource: "PWD Fleet", maintenanceApplied: "Routine Maintenance", notes: "Normal operational baseline." },
      { year: 2022, score: 79, condition: "Moderate", defectsCount: 14, rainfallMm: 1050, inspectionSource: "Camera Fleet", maintenanceApplied: "Crack Sealing", notes: "Heavy logistics hub traffic increase." },
      { year: 2023, score: 62, condition: "Worsening Rutting", defectsCount: 31, rainfallMm: 1380, inspectionSource: "PWD Inspection", maintenanceApplied: "Patching", notes: "Wheel track rutting depth exceeding 15mm." },
      { year: 2024, score: 49, condition: "Severe Fatigue Cracking", defectsCount: 49, rainfallMm: 1540, inspectionSource: "Autonomous LiDAR", maintenanceApplied: "Deferred", notes: "Base course shear failure developing." },
      { year: 2025, score: 41, condition: "High Defect Density", defectsCount: 65, rainfallMm: 1690, inspectionSource: "Telemetry", maintenanceApplied: "Temporary Bitumen fill", notes: "Immediate heavy maintenance needed." },
      { year: 2026, score: 38, condition: "Critical Failure Threshold", defectsCount: 79, rainfallMm: 1720, inspectionSource: "RoadMemory Engine", maintenanceApplied: "Action Urgent", notes: "Prioritized for industrial route protection." }
    ]
  },
  {
    id: "R204-S2",
    name: "CBD MG Road Corridor (Km 0.5 - 3.2)",
    zone: "Central Urban Ring",
    coordinates: [
      [12.9750, 77.6050],
      [12.9760, 77.6150],
      [12.9770, 77.6250]
    ],
    center: [12.9760, 77.6150],
    riskScore: 76,
    riskTier: "high",
    currentConditionIndex: 47,
    defectDensity: "16.2 defects/km",
    defectsList: {
      potholes: 14,
      cracksMeters: 290,
      ruttingMeters: 45
    },
    deteriorationRate12m: "+34.1%",
    lastMaintenanceDate: "Jan 2024",
    trafficVolume: 89000,
    axleLoadTn: 6.2,
    populationServed: 340000,
    estimatedRepairCost: 2200000, // ₹22.0L
    priorityRank: 3,
    impactScore: 9.1,
    recommendedAction: "Mill & Micro-Surfacing Overlay",
    xaiBreakdown: {
      currentCondition: 29,
      deteriorationTrend: 22,
      trafficAxleLoad: 16,
      subgradeAge: 15,
      monsoonExposure: 11,
      maintenanceLag: 7
    },
    xaiTakeaway: "Ultra-high commuter volume causing accelerated surface ravelling and urban utility trench settlement.",
    timelineHistory: [
      { year: 2021, score: 94, condition: "Excellent", defectsCount: 2, rainfallMm: 950, inspectionSource: "Drone Survey", maintenanceApplied: "New Bituminous Laying", notes: "Post Metro expansion resurfacing." },
      { year: 2022, score: 86, condition: "Good", defectsCount: 6, rainfallMm: 1100, inspectionSource: "City Sensors", maintenanceApplied: "Routine Sweep", notes: "Trench cutting for fibre cables noted." },
      { year: 2023, score: 74, condition: "Fair", defectsCount: 16, rainfallMm: 1350, inspectionSource: "PWD Survey", maintenanceApplied: "Utility Trench Fill", notes: "Utility trench settlement spots." },
      { year: 2024, score: 61, condition: "Moderate Surface Cracks", defectsCount: 28, rainfallMm: 1520, inspectionSource: "Automated Van", maintenanceApplied: "Surface Dressing", notes: "Stop-and-go bus traffic fatigue." },
      { year: 2025, score: 52, condition: "Ravelling & Potholes", defectsCount: 42, rainfallMm: 1650, inspectionSource: "Camera Fleet", maintenanceApplied: "Spot Patch", notes: "High public visibility corridor." },
      { year: 2026, score: 47, condition: "High Risk Corridor", defectsCount: 52, rainfallMm: 1700, inspectionSource: "RoadMemory Engine", maintenanceApplied: "Scheduled Night Resurfacing", notes: "Critical civic node for preventive maintenance." }
    ]
  },
  {
    id: "R301-S4",
    name: "Bannerghatta Tech Arterial (Km 8.0 - 12.4)",
    zone: "South Suburban Link",
    coordinates: [
      [12.9050, 77.5950],
      [12.8980, 77.5980],
      [12.8900, 77.6020],
      [12.8820, 77.6050]
    ],
    center: [12.8930, 77.6000],
    riskScore: 71,
    riskTier: "high",
    currentConditionIndex: 52,
    defectDensity: "14.5 defects/km",
    defectsList: {
      potholes: 11,
      cracksMeters: 340,
      ruttingMeters: 60
    },
    deteriorationRate12m: "+29.4%",
    lastMaintenanceDate: "Aug 2023",
    trafficVolume: 54000,
    axleLoadTn: 7.8,
    populationServed: 280000,
    estimatedRepairCost: 1950000, // ₹19.5L
    priorityRank: 4,
    impactScore: 8.7,
    recommendedAction: "Targeted Crack Sealing & Base Waterproofing",
    xaiBreakdown: {
      currentCondition: 27,
      deteriorationTrend: 23,
      trafficAxleLoad: 17,
      subgradeAge: 14,
      monsoonExposure: 12,
      maintenanceLag: 7
    },
    xaiTakeaway: "Water runoff accumulation from suburban hills causing progressive sub-base softening.",
    timelineHistory: [
      { year: 2021, score: 90, condition: "Excellent", defectsCount: 4, rainfallMm: 1020, inspectionSource: "LiDAR Van", maintenanceApplied: "Full Surface", notes: "Suburban widening complete." },
      { year: 2022, score: 83, condition: "Good", defectsCount: 9, rainfallMm: 1210, inspectionSource: "Sensor Fleet", maintenanceApplied: "Routine Drain Clearing", notes: "Heavy monsoon runoff detected." },
      { year: 2023, score: 71, condition: "Fair", defectsCount: 19, rainfallMm: 1490, inspectionSource: "PWD Inspector", maintenanceApplied: "Crack Sealing", notes: "Drainage slope insufficiency." },
      { year: 2024, score: 63, condition: "Moderate Degradation", defectsCount: 31, rainfallMm: 1610, inspectionSource: "Mobile Camera", maintenanceApplied: "Cold Mix Patch", notes: "Water pooling along shoulder." },
      { year: 2025, score: 56, condition: "High Moisture Stress", defectsCount: 44, rainfallMm: 1780, inspectionSource: "Telemetry Node", maintenanceApplied: "Deferred", notes: "Erosion beneath edge kerb." },
      { year: 2026, score: 52, condition: "High Risk Threshold", defectsCount: 58, rainfallMm: 1810, inspectionSource: "RoadMemory Engine", maintenanceApplied: "Preventive Waterproofing", notes: "High population commuter impact." }
    ]
  },
  {
    id: "R405-S1",
    name: "Electronic City Expressway Feed (Km 1.0 - 4.5)",
    zone: "South Suburban Link",
    coordinates: [
      [12.8510, 77.6620],
      [12.8450, 77.6680],
      [12.8390, 77.6740]
    ],
    center: [12.8450, 77.6680],
    riskScore: 58,
    riskTier: "moderate",
    currentConditionIndex: 64,
    defectDensity: "9.8 defects/km",
    defectsList: {
      potholes: 6,
      cracksMeters: 180,
      ruttingMeters: 25
    },
    deteriorationRate12m: "+18.2%",
    lastMaintenanceDate: "Feb 2024",
    trafficVolume: 48000,
    axleLoadTn: 5.5,
    populationServed: 190000,
    estimatedRepairCost: 1400000, // ₹14.0L
    priorityRank: 5,
    impactScore: 7.8,
    recommendedAction: "Preventive Fog Seal & Shoulder Drainage",
    xaiBreakdown: {
      currentCondition: 25,
      deteriorationTrend: 20,
      trafficAxleLoad: 18,
      subgradeAge: 16,
      monsoonExposure: 12,
      maintenanceLag: 9
    },
    xaiTakeaway: "Moderate surface wear; stable sub-base with minor weather oxidation.",
    timelineHistory: [
      { year: 2021, score: 95, condition: "Excellent", defectsCount: 1, rainfallMm: 950, inspectionSource: "Drone", maintenanceApplied: "Fresh Pavement", notes: "Optimal standard." },
      { year: 2022, score: 89, condition: "Good", defectsCount: 4, rainfallMm: 1080, inspectionSource: "Camera Fleet", maintenanceApplied: "Routine Cleaning", notes: "Normal wear." },
      { year: 2023, score: 81, condition: "Good", defectsCount: 10, rainfallMm: 1320, inspectionSource: "PWD Fleet", maintenanceApplied: "Joint Sealing", notes: "Minor surface weathering." },
      { year: 2024, score: 73, condition: "Fair", defectsCount: 18, rainfallMm: 1480, inspectionSource: "Sensor Fleet", maintenanceApplied: "Fog Seal", notes: "Stable structural integrity." },
      { year: 2025, score: 67, condition: "Moderate", defectsCount: 27, rainfallMm: 1590, inspectionSource: "Mobile Camera", maintenanceApplied: "Routine", notes: "Minor longitudinal cracks." },
      { year: 2026, score: 64, condition: "Moderate Risk", defectsCount: 34, rainfallMm: 1650, inspectionSource: "RoadMemory Engine", maintenanceApplied: "Monitored", notes: "Preventive action scheduled Q3." }
    ]
  },
  {
    id: "R112-S2",
    name: "Hebbal Flyover Service Loop (Km 0.0 - 1.8)",
    zone: "North Arterial Corridor",
    coordinates: [
      [13.0350, 77.5890],
      [13.0390, 77.5940],
      [13.0430, 77.5980]
    ],
    center: [13.0390, 77.5940],
    riskScore: 54,
    riskTier: "moderate",
    currentConditionIndex: 68,
    defectDensity: "8.4 defects/km",
    defectsList: {
      potholes: 4,
      cracksMeters: 140,
      ruttingMeters: 20
    },
    deteriorationRate12m: "+14.6%",
    lastMaintenanceDate: "Jun 2024",
    trafficVolume: 71000,
    axleLoadTn: 6.8,
    populationServed: 310000,
    estimatedRepairCost: 1250000, // ₹12.5L
    priorityRank: 6,
    impactScore: 7.5,
    recommendedAction: "Expansion Joint Maintenance & Surface Milling",
    xaiBreakdown: {
      currentCondition: 24,
      deteriorationTrend: 18,
      trafficAxleLoad: 22,
      subgradeAge: 18,
      monsoonExposure: 10,
      maintenanceLag: 8
    },
    xaiTakeaway: "Controlled deterioration; elevated flyover structure buffers sub-base moisture stress.",
    timelineHistory: [
      { year: 2021, score: 93, condition: "Excellent", defectsCount: 2, rainfallMm: 980, inspectionSource: "LiDAR", maintenanceApplied: "Resurfaced", notes: "Flyover ramp inspection passed." },
      { year: 2022, score: 87, condition: "Good", defectsCount: 5, rainfallMm: 1120, inspectionSource: "PWD Inspectors", maintenanceApplied: "Joint Inspection", notes: "Clean structural deck." },
      { year: 2023, score: 80, condition: "Good", defectsCount: 11, rainfallMm: 1390, inspectionSource: "Sensor Fleet", maintenanceApplied: "Joint Seal", notes: "Expansion joint wear." },
      { year: 2024, score: 74, condition: "Fair", defectsCount: 17, rainfallMm: 1510, inspectionSource: "Van LiDAR", maintenanceApplied: "Service Overlay", notes: "Heavy weaving traffic." },
      { year: 2025, score: 70, condition: "Fair", defectsCount: 22, rainfallMm: 1610, inspectionSource: "Camera Fleet", maintenanceApplied: "Minor Patch", notes: "Ramp deceleration friction loss." },
      { year: 2026, score: 68, condition: "Moderate Risk", defectsCount: 27, rainfallMm: 1670, inspectionSource: "RoadMemory Engine", maintenanceApplied: "Routine Service", notes: "Low priority for structural intervention." }
    ]
  },
  {
    id: "R210-S5",
    name: "Old Airport Road Arterial (Km 4.2 - 7.6)",
    zone: "Central Urban Ring",
    coordinates: [
      [12.9600, 77.6480],
      [12.9580, 77.6580],
      [12.9560, 77.6680]
    ],
    center: [12.9580, 77.6580],
    riskScore: 32,
    riskTier: "low",
    currentConditionIndex: 82,
    defectDensity: "3.2 defects/km",
    defectsList: {
      potholes: 1,
      cracksMeters: 65,
      ruttingMeters: 5
    },
    deteriorationRate12m: "+4.1%",
    lastMaintenanceDate: "Dec 2025 (Full Resurfacing)",
    trafficVolume: 58000,
    axleLoadTn: 4.8,
    populationServed: 220000,
    estimatedRepairCost: 800000, // ₹8.0L
    priorityRank: 7,
    impactScore: 4.2,
    recommendedAction: "Routine Drainage Cleaning & Visual Telemetry Monitoring",
    xaiBreakdown: {
      currentCondition: 15,
      deteriorationTrend: 12,
      trafficAxleLoad: 18,
      subgradeAge: 25,
      monsoonExposure: 18,
      maintenanceLag: 12
    },
    xaiTakeaway: "Recent polymer-modified bitumen resurfacing provides strong structural resistance.",
    timelineHistory: [
      { year: 2021, score: 72, condition: "Fair", defectsCount: 18, rainfallMm: 1010, inspectionSource: "PWD Survey", maintenanceApplied: "Patch Work", notes: "Aging pavement structure." },
      { year: 2022, score: 61, condition: "Moderate Cracks", defectsCount: 32, rainfallMm: 1180, inspectionSource: "Camera Fleet", maintenanceApplied: "Deferred", notes: "Water pooling along curb." },
      { year: 2023, score: 48, condition: "Severe Cracks", defectsCount: 54, rainfallMm: 1450, inspectionSource: "Autonomous LiDAR", maintenanceApplied: "Scheduled for Tender", notes: "High community complaints." },
      { year: 2024, score: 39, condition: "Pothole Clusters", defectsCount: 76, rainfallMm: 1580, inspectionSource: "RoadMemory Engine", maintenanceApplied: "Tender Approved", notes: "Major reconstruction scheduled." },
      { year: 2025, score: 92, condition: "Reconstructed Excellent", defectsCount: 1, rainfallMm: 1690, inspectionSource: "Post-Work Audit", maintenanceApplied: "Polymer Bitumen Overlay", notes: "Full structural renewal." },
      { year: 2026, score: 82, condition: "Optimal / Low Risk", defectsCount: 3, rainfallMm: 1720, inspectionSource: "RoadMemory Engine", maintenanceApplied: "Monitor Only", notes: "Stable performance trajectory." }
    ]
  },
  {
    id: "R309-S1",
    name: "Yelahanka Suburban Express Way (Km 1.2 - 5.0)",
    zone: "North Arterial Corridor",
    coordinates: [
      [13.0980, 77.5850],
      [13.1050, 77.5920],
      [13.1120, 77.6000]
    ],
    center: [13.1050, 77.5920],
    riskScore: 24,
    riskTier: "low",
    currentConditionIndex: 88,
    defectDensity: "2.1 defects/km",
    defectsList: {
      potholes: 0,
      cracksMeters: 40,
      ruttingMeters: 0
    },
    deteriorationRate12m: "+2.8%",
    lastMaintenanceDate: "Jan 2026",
    trafficVolume: 32000,
    axleLoadTn: 4.2,
    populationServed: 140000,
    estimatedRepairCost: 650000, // ₹6.5L
    priorityRank: 8,
    impactScore: 3.1,
    recommendedAction: "Routine Telemetry Monitoring",
    xaiBreakdown: {
      currentCondition: 12,
      deteriorationTrend: 10,
      trafficAxleLoad: 15,
      subgradeAge: 28,
      monsoonExposure: 20,
      maintenanceLag: 15
    },
    xaiTakeaway: "Asset in prime lifecycle phase following recent preventive micro-surfacing.",
    timelineHistory: [
      { year: 2021, score: 86, condition: "Good", defectsCount: 6, rainfallMm: 890, inspectionSource: "LiDAR", maintenanceApplied: "Routine", notes: "Baseline." },
      { year: 2022, score: 82, condition: "Good", defectsCount: 11, rainfallMm: 1020, inspectionSource: "Camera", maintenanceApplied: "Routine", notes: "Low traffic impact." },
      { year: 2023, score: 78, condition: "Good", defectsCount: 15, rainfallMm: 1280, inspectionSource: "PWD Fleet", maintenanceApplied: "Crack Seal", notes: "Stable." },
      { year: 2024, score: 74, condition: "Fair", defectsCount: 21, rainfallMm: 1410, inspectionSource: "Sensor Van", maintenanceApplied: "Micro-surfacing", notes: "Preventive overlay applied." },
      { year: 2025, score: 91, condition: "Excellent", defectsCount: 1, rainfallMm: 1540, inspectionSource: "Post-Work Audit", maintenanceApplied: "Completed", notes: "Optimal condition." },
      { year: 2026, score: 88, condition: "Low Risk", defectsCount: 2, rainfallMm: 1610, inspectionSource: "RoadMemory Engine", maintenanceApplied: "No Action Needed", notes: "Predictive trend flat." }
    ]
  }
];

// Twin Segment Paradox Comparison Data (Road A vs Road B with identical current defects = 10)
export const TWIN_PARADOX_DATA = {
  defectCount: 10,
  roadA: {
    id: "Segment A (NH-44 Expressway)",
    currentDefects: 10,
    historyTrend: "Rapidly Worsening (+350% in 6 months)",
    riskScore: 84,
    riskBadge: "HIGH RISK",
    recommendedAction: "Immediate Preventive Resurfacing",
    reason: "Historical memory shows micro-fracture propagation rate is exponential under heavy freight axle loading.",
    timeline: [
      { year: "2024 Q1", defects: 1 },
      { year: "2024 Q3", defects: 3 },
      { year: "2025 Q1", defects: 6 },
      { year: "2025 Q4", defects: 10 }
    ]
  },
  roadB: {
    id: "Segment B (Suburban Sector Road)",
    currentDefects: 10,
    historyTrend: "Stable / Flat (No change in 24 months)",
    riskScore: 28,
    riskBadge: "LOW RISK",
    recommendedAction: "Routine Annual Inspection",
    reason: "Historical memory shows defects are non-structural hair-line shrinkage cracks with zero moisture infiltration.",
    timeline: [
      { year: "2024 Q1", defects: 9 },
      { year: "2024 Q3", defects: 10 },
      { year: "2025 Q1", defects: 10 },
      { year: "2025 Q4", defects: 10 }
    ]
  }
};
