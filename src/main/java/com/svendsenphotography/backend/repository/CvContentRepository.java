package com.svendsenphotography.backend.repository;

import com.svendsenphotography.backend.model.CvContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CvContentRepository extends JpaRepository<CvContent, Long> {
}
